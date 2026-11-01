import { clamp, num, str, type Value } from './cast';
import { LOOP, Target, WAIT } from './target';
import { STAGE_H, STAGE_W, type AudioLike, type Platform, type TargetDef } from './types';

export type HatDef =
  | { k: 'flag' }
  | { k: 'broadcast'; name: string }
  | { k: 'key'; key: string }
  | { k: 'click' }
  | { k: 'clone' }
  | { k: 'greater'; test: (t: Target) => boolean };

export type ScriptFn = (t: Target, th: Thread) => Generator<number, void, void>;
export interface ScriptDef {
  hat: HatDef;
  fn: ScriptFn;
}

export interface Pointer {
  id: number;
  x: number; // coordenadas de palco (y para cima)
  y: number;
  down: boolean;
}

export class Thread {
  done = false;
  gen: Generator<number, void, void>;
  /** último yield: LOOP (continua "ativa") ou WAIT */
  mode = LOOP;
  constructor(public target: Target, public script: ScriptDef, public pointer: Pointer | null) {
    this.gen = script.fn(target, this);
  }
  /** alias usado pelo código gerado */
  mouseDown() {
    return this.target.rt.mouseDown(this);
  }
}

export interface MonitorDef {
  name: string;
  label: string;
  x: number;
  y: number;
  visible: boolean;
  mode: string;
}

export interface GameConfig {
  /** tamanho do mundo em "chunks" (cada chunk = uma tela de 480x360) */
  chunks: { cols: number; rows: number };
  /** sprites que vivem no mundo (rolam com a câmera) */
  worldSprites: string[];
  /** sprites cujo goto x,y literal é relativo à tela (nascem nas bordas da área visível) */
  screenRelativeGoto: string[];
  cameraTarget: string;
  /** sprite que é "clicado" automaticamente no início (escolhe o modo mobile) */
  autoClick?: string;
  maxClones: number;
  /** sprites de controle que ficam mais perto das bordas em telas largas (-1 = esquerda, 1 = direita) */
  hudShift?: Record<string, number>;
}

const FRAME_MS = 1000 / 30;

export class Runtime {
  G: Record<string, Value> = {};
  stage!: Target;
  targets: Target[] = [];
  /** ordem de camadas: do fundo (palco) para a frente */
  order: Target[] = [];
  private originals = new Map<string, Target>();
  private families = new Map<string, Target[]>();
  private scripts = new Map<string, ScriptDef[]>();
  private broadcastIdx = new Map<string, Map<string, ScriptDef[]>>();
  private threadsOf = new Map<Target, Map<ScriptDef, Thread>>();
  threads: Thread[] = [];
  audio: AudioLike = { play: () => null, setOwnerVolume: () => {}, stopAll: () => {} };
  config!: GameConfig;
  /** largura visível do palco (480 em 4:3; maior em telas largas — o jogo ocupa a tela toda) */
  viewW = STAGE_W;
  world = { w: STAGE_W * 3, h: STAGE_H * 3 };
  /** ouvintes de mensagens (broadcast) — usados pelas conquistas extras e pelo salvamento */
  broadcastListeners: Array<(name: string) => void> = [];
  cam = { x: 0, y: 0 };
  currentMSecs = 0;
  private timerStart = 0;
  redrawRequested = false;
  keys = new Set<string>();
  pointers = new Map<number, Pointer>();
  private lastPointer: Pointer = { id: -1, x: 0, y: 0, down: false };
  answer = '';
  pendingAsk: { question: string } | null = null;
  onAsk: (q: string | null) => void = () => {};
  monitors = new Map<string, MonitorDef>();
  afterStep: Array<(rt: Runtime) => void> = [];
  private edgeState = new Map<string, boolean>();
  private current: Thread | null = null;
  private running = false;
  private lastStep = 0;
  onFrame: () => void = () => {};
  loaded = false;

  constructor() {
    this.G = {};
  }

  // ----------------------------------------------------------- carregamento
  async load(
    defs: TargetDef[],
    scripts: Record<string, ScriptDef[]>,
    config: GameConfig,
    monitors: MonitorDef[],
    platform: Platform,
    progress: (p: number, label: string) => void,
  ) {
    this.config = config;
    this.world = { w: this.viewW * config.chunks.cols, h: STAGE_H * config.chunks.rows };
    this.audio = platform.audio;
    for (const m of monitors) this.monitors.set(m.name, m);
    for (const d of defs) {
      const t = new Target(d, this);
      t.sounds = d.sounds;
      t.world = config.worldSprites.includes(d.name);
      if (d.isStage) {
        this.stage = t;
        t.v = this.G;
        Object.assign(this.G, d.vars);
      } else this.originals.set(d.name, t);
      this.targets.push(t);
      this.families.set(d.name, [t]);
      this.scripts.set(d.name, scripts[d.name] ?? []);
    }
    this.order = [...this.targets].sort((a, b) => a.def.layerOrder - b.def.layerOrder);
    this.buildIndex();
    // fantasias (fila com limite de concorrência)
    const jobs: Array<() => Promise<void>> = [];
    for (const t of this.targets) {
      t.costumes = new Array(t.def.costumes.length);
      t.def.costumes.forEach((c, i) => {
        jobs.push(async () => {
          t.costumes[i] = await platform.loadCostume(c, t.name);
        });
      });
    }
    let done = 0;
    const total = jobs.length;
    const worker = async () => {
      for (;;) {
        const j = jobs.shift();
        if (!j) return;
        await j();
        done++;
        if (done % 8 === 0) progress(done / total, 'Carregando sprites');
      }
    };
    await Promise.all([worker(), worker(), worker(), worker()]);
    progress(1, 'Pronto');
    this.loaded = true;
  }

  private buildIndex() {
    this.broadcastIdx.clear();
    for (const [sprite, list] of this.scripts) {
      const m = new Map<string, ScriptDef[]>();
      for (const s of list)
        if (s.hat.k === 'broadcast') {
          const k = s.hat.name.toUpperCase();
          if (!m.has(k)) m.set(k, []);
          m.get(k)!.push(s);
        }
      this.broadcastIdx.set(sprite, m);
    }
  }

  /** define a largura visível (tela cheia); cada "chunk" passa a ter o tamanho de uma tela */
  setViewWidth(w: number) {
    this.viewW = Math.max(STAGE_W, Math.round(w));
    if (this.config) this.world.w = this.viewW * this.config.chunks.cols;
    this.requestRedraw();
  }

  // ---------------------------------------------------------------- consulta
  sprite(name: string): Target | undefined {
    return this.originals.get(name);
  }
  clonesOf(name: string): Target[] {
    return this.families.get(name) ?? [];
  }
  getMonitor(name: string) {
    return this.monitors.get(name);
  }
  setMonitorVisible(name: string, visible: boolean) {
    const m = this.monitors.get(name);
    if (m) m.visible = visible;
    this.requestRedraw();
  }

  // ----------------------------------------------------------------- entrada
  mouseOf(th?: Thread | null): { x: number; y: number } {
    return th?.pointer ?? this.lastPointer;
  }
  mouseDown(th?: Thread | null): boolean {
    if (th?.pointer) return th.pointer.down;
    for (const p of this.pointers.values()) if (p.down) return true;
    return false;
  }
  keyDown(name: string) {
    if (name === 'any') return this.keys.size > 0;
    return this.keys.has(name);
  }
  pointerDown(id: number, x: number, y: number) {
    const p: Pointer = { id, x, y, down: true };
    this.pointers.set(id, p);
    this.lastPointer = p;
    // clique: quem recebe é o sprite visível mais alto sob o ponteiro (como o "pick" do Scratch)
    const hit = this.pick(x, y);
    if (hit) this.startHats((s) => s.hat.k === 'click', hit, p, true);
  }
  pointerMove(id: number, x: number, y: number) {
    const p = this.pointers.get(id);
    if (!p) return;
    p.x = x;
    p.y = y;
    this.lastPointer = p;
  }
  /** mouse passando sobre o palco sem clicar (só desktop) */
  hover(x: number, y: number) {
    for (const p of this.pointers.values()) if (p.down) return;
    this.lastPointer = { ...this.lastPointer, id: -1, x, y, down: false };
  }
  pointerUp(id: number) {
    const p = this.pointers.get(id);
    if (p) p.down = false;
    this.pointers.delete(id);
    // Celular não tem "mouse passando por cima": sem nenhum dedo na tela o ponteiro sai do palco,
    // senão botões ficariam "tocados" para sempre (dicas piscando, botões crescendo).
    // (as threads que nasceram deste toque continuam lendo a posição final em `p`)
    if (this.lastPointer === p && this.pointers.size === 0) this.lastPointer = { id: -1, x: 1e5, y: 1e5, down: false };
  }
  keyPress(name: string) {
    this.keys.add(name);
    this.startHats((s) => s.hat.k === 'key' && (s.hat.key === name || s.hat.key === 'any'), undefined, null, false);
  }
  keyRelease(name: string) {
    this.keys.delete(name);
  }

  pick(x: number, y: number): Target | null {
    for (let i = this.order.length - 1; i >= 0; i--) {
      const t = this.order[i];
      if (t.isStage || !t.visible || t.effects.ghost >= 100) continue;
      if (t.alphaAtCanvas(x + this.viewW / 2, STAGE_H / 2 - y) > 0) return t;
    }
    return null;
  }

  // -------------------------------------------------------------- camadas
  goToLayer(t: Target, where: 'front' | 'back') {
    if (t.isStage) return;
    const i = this.order.indexOf(t);
    if (i < 0) return;
    this.order.splice(i, 1);
    if (where === 'front') this.order.push(t);
    else this.order.splice(1, 0, t);
    this.requestRedraw();
  }
  goLayers(t: Target, n: number, dir: 'forward' | 'backward') {
    if (t.isStage) return;
    const i = this.order.indexOf(t);
    if (i < 0) return;
    const delta = dir === 'forward' ? n : -n;
    this.order.splice(i, 1);
    this.order.splice(clamp(i + delta, 1, this.order.length), 0, t);
    this.requestRedraw();
  }

  // -------------------------------------------------------------------- tempo
  requestRedraw() {
    this.redrawRequested = true;
  }
  resetTimer() {
    this.timerStart = this.currentMSecs;
  }
  get timer() {
    return (this.currentMSecs - this.timerStart) / 1000;
  }
  /** control_wait: sempre cede ao menos uma vez e mede o tempo pelo relógio do quadro */
  *wait(secs: Value): Generator<number, void, void> {
    const dur = Math.max(0, 1000 * num(secs));
    const start = this.currentMSecs;
    this.requestRedraw();
    yield WAIT;
    while (this.currentMSecs - start < dur) yield WAIT;
  }
  *ask(question: Value): Generator<number, void, void> {
    this.pendingAsk = { question: str(question) };
    this.onAsk(this.pendingAsk.question);
    while (this.pendingAsk) yield WAIT;
  }
  submitAnswer(text: string) {
    this.answer = text;
    this.pendingAsk = null;
    this.onAsk(null);
  }

  // ------------------------------------------------------------------ threads
  private startThread(t: Target, s: ScriptDef, pointer: Pointer | null, restart: boolean): Thread | null {
    let map = this.threadsOf.get(t);
    if (!map) this.threadsOf.set(t, (map = new Map()));
    const old = map.get(s);
    const th = new Thread(t, s, pointer);
    if (old && !old.done) {
      if (!restart) return null;
      const idx = this.threads.indexOf(old);
      this.killThread(old);
      if (idx >= 0) this.threads[idx] = th;
      else this.threads.push(th);
    } else this.threads.push(th);
    map.set(s, th);
    return th;
  }

  private killThread(th: Thread) {
    if (th.done) return;
    th.done = true;
    if (th !== this.current) {
      try {
        th.gen.return();
      } catch {
        /* ignorado */
      }
    }
    const map = this.threadsOf.get(th.target);
    if (map?.get(th.script) === th) map.delete(th.script);
  }

  startHats(match: (s: ScriptDef) => boolean, only: Target | undefined, pointer: Pointer | null, restart: boolean) {
    for (let i = this.order.length - 1; i >= 0; i--) {
      const t = this.order[i];
      if (only && t !== only) continue;
      for (const s of this.scripts.get(t.def.name) ?? []) if (match(s)) this.startThread(t, s, pointer, restart);
    }
  }

  broadcast(name: Value, th?: Thread | null) {
    const key = str(name).toUpperCase();
    for (const f of this.broadcastListeners) f(key);
    const pointer = th?.pointer ?? null;
    for (let i = this.order.length - 1; i >= 0; i--) {
      const t = this.order[i];
      const list = this.broadcastIdx.get(t.def.name)?.get(key);
      if (list) for (const s of list) this.startThread(t, s, pointer, true);
    }
  }

  stopOtherScripts(t: Target, th: Thread) {
    for (const o of [...this.threads]) if (o.target === t && o !== th) this.killThread(o);
  }

  stopAll() {
    for (const t of [...this.targets]) if (t.isClone) this.removeClone(t);
    for (const th of [...this.threads]) this.killThread(th);
    this.threads = [];
    this.audio.stopAll();
    for (const t of this.targets) t.clearEffects();
    this.pendingAsk = null;
    this.onAsk(null);
  }

  // ------------------------------------------------------------------- clones
  createClone(src: Target | undefined) {
    if (!src || src.isStage) return;
    const original = this.originals.get(src.name)!;
    if (this.targets.filter((t) => t.isClone).length >= this.config.maxClones) return;
    const c = new Target(src.def, this);
    c.isClone = true;
    c.x = src.x;
    c.y = src.y;
    c.direction = src.direction;
    c.size = src.size;
    c.visible = src.visible;
    c.rotationStyle = src.rotationStyle;
    c.currentCostume = src.currentCostume;
    c.volume = src.volume;
    c.v = { ...src.v };
    c.effects = { ...src.effects };
    c.costumes = original.costumes;
    c.sounds = original.sounds;
    c.world = original.world;
    this.targets.push(c);
    this.families.get(src.name)!.push(c);
    // o clone fica logo atrás do original
    const idx = this.order.indexOf(src);
    this.order.splice(Math.max(1, idx), 0, c);
    for (const s of this.scripts.get(src.name) ?? []) if (s.hat.k === 'clone') this.startThread(c, s, null, true);
  }
  removeClone(t: Target) {
    if (!t.isClone) return;
    for (const th of this.threadsOf.get(t)?.values() ?? []) this.killThread(th);
    this.threadsOf.delete(t);
    this.targets.splice(this.targets.indexOf(t), 1);
    const o = this.order.indexOf(t);
    if (o >= 0) this.order.splice(o, 1);
    const fam = this.families.get(t.name)!;
    fam.splice(fam.indexOf(t), 1);
    this.requestRedraw();
  }
  deleteThisClone(t: Target): boolean {
    if (!t.isClone) return false;
    this.removeClone(t);
    return true;
  }

  // ------------------------------------------------------------------- câmera
  updateCamera() {
    const p = this.originals.get(this.config.cameraTarget);
    if (!p) return;
    const mx = Math.max(0, this.world.w / 2 - this.viewW / 2);
    const my = Math.max(0, this.world.h / 2 - STAGE_H / 2);
    this.cam.x = clamp(p.x, -mx, mx);
    this.cam.y = clamp(p.y, -my, my);
  }

  /**
   * O projeto original dispara o hat "quando timer > 0" assim que é carregado (antes da bandeira):
   * ele mostra a capa e esconde tudo. Reproduzimos esse primeiro quadro aqui.
   */
  preflight() {
    this.currentMSecs = performance.now();
    this.step();
    this.onFrame();
  }

  // --------------------------------------------------------------- bandeira
  greenFlag() {
    this.stopAll();
    this.resetTimer();
    // (os hats "quando timer > x" já foram avaliados em preflight(); o estado de borda é mantido)
    this.currentMSecs = performance.now();
    this.updateCamera();
    this.startHats((s) => s.hat.k === 'flag', undefined, null, true);
    const auto = this.config.autoClick && this.originals.get(this.config.autoClick);
    if (auto) this.startHats((s) => s.hat.k === 'click', auto, null, true);
  }

  // ------------------------------------------------------------------- laço
  start() {
    if (this.running) return;
    this.running = true;
    this.lastStep = performance.now();
    const tick = (now: number) => {
      if (!this.running) return;
      requestAnimationFrame(tick);
      if (now - this.lastStep >= FRAME_MS - 2) {
        this.lastStep = Math.max(now - FRAME_MS, this.lastStep + FRAME_MS);
        this.step();
        this.onFrame();
      }
    };
    requestAnimationFrame(tick);
  }
  stop() {
    this.running = false;
  }

  step() {
    this.currentMSecs = performance.now();
    this.updateCamera();
    // hats ativados por borda (when timer > x)
    for (const t of this.order) {
      for (const s of this.scripts.get(t.def.name) ?? []) {
        if (s.hat.k !== 'greater') continue;
        const key = `${t.def.name}|${this.scripts.get(t.def.name)!.indexOf(s)}`;
        const now = s.hat.test(t);
        const prev = this.edgeState.get(key) ?? false;
        this.edgeState.set(key, now);
        if (now && !prev) this.startThread(t, s, null, false);
      }
    }
    this.redrawRequested = false;
    this.stepThreads();
    this.updateCamera();
    for (const f of this.afterStep) f(this);
  }

  private stepThreads() {
    const WORK_TIME = 0.75 * FRAME_MS;
    const startT = performance.now();
    let active = Infinity;
    while (this.threads.length > 0 && active > 0 && performance.now() - startT < WORK_TIME && !this.redrawRequested) {
      active = 0;
      let stopped = false;
      const threads = this.threads;
      for (let i = 0; i < threads.length; i++) {
        const th = threads[i];
        if (th.done) {
          stopped = true;
          continue;
        }
        this.current = th;
        let r: IteratorResult<number, void>;
        try {
          r = th.gen.next();
        } catch (e) {
          console.error(`Erro no script de "${th.target.name}":`, e);
          this.killThread(th);
          stopped = true;
          continue;
        }
        this.current = null;
        if (r.done) {
          th.done = true;
          const map = this.threadsOf.get(th.target);
          if (map?.get(th.script) === th) map.delete(th.script);
          stopped = true;
        } else {
          th.mode = r.value;
          if (r.value === LOOP) active++;
        }
        if (th.done) stopped = true;
      }
      if (stopped) this.threads = this.threads.filter((t) => !t.done);
    }
    this.current = null;
  }
}

export const rt = new Runtime();
