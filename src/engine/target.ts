import { bool, clamp, degToRad, isWhiteSpace, limitPrecision, num, radToDeg, str, wrapClamp, type Value } from './cast';
import type { Runtime, Thread } from './runtime';
import { maskHit, STAGE_H, STAGE_W, type CostumeData, type SoundDef, type TargetDef } from './types';

export const WAIT = 1; // yield de "espera" (a thread é reexecutada no mesmo quadro)
export const LOOP = 0; // yield de fim de iteração de laço

export interface Bounds {
  left: number;
  right: number;
  top: number; // maior y (eixo y para cima)
  bottom: number;
}

export interface Effects {
  color: number;
  fisheye: number;
  whirl: number;
  pixelate: number;
  mosaic: number;
  brightness: number;
  ghost: number;
}

const FENCE_WIDTH = 15;

export class Target {
  isClone = false;
  isStage: boolean;
  x: number;
  y: number;
  direction: number;
  size: number;
  visible: boolean;
  rotationStyle: TargetDef['rotationStyle'];
  currentCostume: number;
  volume: number;
  v: Record<string, Value> = {};
  effects: Effects = { color: 0, fisheye: 0, whirl: 0, pixelate: 0, mosaic: 0, brightness: 0, ghost: 0 };
  costumes: CostumeData[] = [];
  sounds: SoundDef[] = [];
  /** sprites do mundo (jogador, inimigos, armas...) usam coordenadas de mundo + câmera */
  world = false;
  bubble: { text: string } | null = null;
  /** instante (ms do relógio do quadro) em que o sprite acabou de aparecer — usado só pelas animações de spawn */
  spawnAt = -1e9;

  constructor(public def: TargetDef, public rt: Runtime) {
    this.isStage = def.isStage;
    this.x = def.x;
    this.y = def.y;
    this.direction = def.direction;
    this.size = def.size;
    this.visible = def.visible;
    this.rotationStyle = def.rotationStyle;
    this.currentCostume = def.currentCostume;
    this.volume = def.volume;
    this.v = { ...def.vars };
  }

  get name() {
    return this.def.name;
  }
  get costume(): CostumeData {
    return this.costumes[this.currentCostume];
  }

  // ---------------------------------------------------------------- geometria
  /** deslocamento (em px de tela) dos controles de toque para perto das bordas em telas largas */
  private shiftX(): number {
    const f = this.rt.config?.hudShift?.[this.def.name];
    return f ? f * 0.75 * ((this.rt.viewW - STAGE_W) / 2) : 0;
  }
  private offX() {
    return this.world ? this.rt.cam.x : -this.shiftX();
  }
  private offY() {
    return this.world ? this.rt.cam.y : 0;
  }
  /** posição na tela (coordenadas de palco, y para cima) */
  get sx() {
    return this.x - this.offX();
  }
  get sy() {
    return this.y - this.offY();
  }

  /** matriz imagem-local(unidades) -> canvas (x para a direita, y para baixo, 480x360) */
  matrix(): [number, number, number, number, number, number] {
    const c = this.costume;
    let dir = 90;
    let scx = this.size / 100;
    const scy = this.size / 100;
    if (this.rotationStyle === 'all around') dir = this.direction;
    else if (this.rotationStyle === 'left-right') scx *= this.direction < 0 ? -1 : 1;
    const th = degToRad(dir - 90);
    const cos = Math.cos(th);
    const sin = Math.sin(th);
    const a = scx * cos;
    const b = scx * sin;
    const cc = -scy * sin;
    const d = scy * cos;
    const px = this.sx + this.rt.viewW / 2;
    const py = STAGE_H / 2 - this.sy;
    return [a, b, cc, d, px - a * c.cx - cc * c.cy, py - b * c.cx - d * c.cy];
  }

  /** casco transformado, em coordenadas de canvas (y para baixo) */
  private hullCanvas(): [number, number][] | null {
    const c = this.costume;
    if (!c || c.empty || !c.hull.length) return null;
    const [a, b, cc, d, e, f] = this.matrix();
    return c.hull.map(([u, v]) => [a * u + cc * v + e, b * u + d * v + f]);
  }

  /** limites na tela (y para cima) */
  screenBounds(): Bounds | null {
    const h = this.hullCanvas();
    if (!h) return null;
    let l = Infinity;
    let r = -Infinity;
    let t = Infinity;
    let bt = -Infinity;
    for (const [X, Y] of h) {
      if (X < l) l = X;
      if (X > r) r = X;
      if (Y < t) t = Y;
      if (Y > bt) bt = Y;
    }
    const hw = this.rt.viewW / 2;
    return { left: l - hw, right: r - hw, top: STAGE_H / 2 - t, bottom: STAGE_H / 2 - bt };
  }

  /** limites no espaço do próprio sprite (mundo ou tela) */
  ownBounds(): Bounds | null {
    const b = this.screenBounds();
    if (!b) return null;
    const ox = this.offX();
    const oy = this.offY();
    return { left: b.left + ox, right: b.right + ox, top: b.top + oy, bottom: b.bottom + oy };
  }

  /** mantém o sprite dentro da "cerca" (mesma regra do Scratch, mas no retângulo do mundo/tela) */
  fence(x: number, y: number): [number, number] {
    const bb = this.ownBounds();
    if (!bb) return [x, y];
    const { hw, hh } = this.fenceHalf();
    const dx = x - this.x;
    const dy = y - this.y;
    const inset = Math.floor(Math.min(bb.right - bb.left, bb.top - bb.bottom) / 2);
    const sxm = hw - Math.min(FENCE_WIDTH, inset);
    if (bb.right + dx < -sxm) x = Math.ceil(this.x - (sxm + bb.right));
    else if (bb.left + dx > sxm) x = Math.floor(this.x + (sxm - bb.left));
    const sym = hh - Math.min(FENCE_WIDTH, inset);
    if (bb.top + dy < -sym) y = Math.ceil(this.y - (sym + bb.top));
    else if (bb.bottom + dy > sym) y = Math.floor(this.y + (sym - bb.bottom));
    return [x, y];
  }

  fenceHalf() {
    return this.world ? { hw: this.rt.world.w / 2, hh: this.rt.world.h / 2 } : { hw: STAGE_W / 2, hh: STAGE_H / 2 };
  }

  // ------------------------------------------------------------------ movimento
  setXY(x: number, y: number) {
    if (this.isStage) return;
    [x, y] = this.fence(x, y);
    this.x = x;
    this.y = y;
    if (this.visible) this.rt.requestRedraw();
  }
  changeX(dx: number) {
    this.setXY(this.x + dx, this.y);
  }
  changeY(dy: number) {
    this.setXY(this.x, this.y + dy);
  }
  setX(x: number) {
    this.setXY(x, this.y);
  }
  setY(y: number) {
    this.setXY(this.x, y);
  }
  move(steps: number) {
    const rad = degToRad(90 - this.direction);
    this.setXY(this.x + steps * Math.cos(rad), this.y + steps * Math.sin(rad));
  }
  setDirection(d: number) {
    if (this.isStage) return;
    if (!Number.isFinite(d)) return;
    this.direction = wrapClamp(d, -179, 180);
    if (this.visible) this.rt.requestRedraw();
  }
  setRotationStyle(s: string) {
    if (s === 'all around' || s === 'left-right' || s === "don't rotate") {
      this.rotationStyle = s;
      if (this.visible) this.rt.requestRedraw();
    }
  }

  /** posição de outro alvo expressa no espaço deste sprite */
  private positionOf(menu: string, th?: Thread): [number, number] | null {
    if (menu === '_mouse_') {
      const m = this.rt.mouseOf(th);
      return [m.x + this.offX(), m.y + this.offY()];
    }
    if (menu === '_random_') {
      const { hw, hh } = this.fenceHalf();
      return [Math.round(2 * hw * Math.random() - hw), Math.round(2 * hh * Math.random() - hh)];
    }
    const o = this.rt.sprite(menu);
    if (!o) return null;
    return [o.sx + this.offX(), o.sy + this.offY()];
  }
  goTo(menu: string, th?: Thread) {
    const p = this.positionOf(menu, th);
    if (p) this.setXY(p[0], p[1]);
  }
  /** goto x,y relativo à tela (usado para nascer nas bordas da área visível; x vale na tela de 480 e é esticado p/ a tela toda) */
  goToScreen(x: number, y: number) {
    this.setXY((x * this.rt.viewW) / STAGE_W + this.offX(), y + this.offY());
  }
  pointTowards(menu: string, th?: Thread) {
    const p = this.positionOf(menu, th);
    if (!p) return;
    const dx = p[0] - this.x;
    const dy = p[1] - this.y;
    this.setDirection(90 - radToDeg(Math.atan2(dy, dx)));
  }
  *glide(secs: Value, x: number, y: number): Generator<number, void, void> {
    const rt = this.rt;
    const dur = Math.max(0, 1000 * num(secs));
    const sx = this.x;
    const sy = this.y;
    const start = rt.currentMSecs;
    rt.requestRedraw();
    if (dur <= 0) {
      this.setXY(x, y);
      return;
    }
    yield WAIT;
    for (;;) {
      const frac = (rt.currentMSecs - start) / dur;
      if (frac >= 1) {
        this.setXY(x, y);
        return;
      }
      this.setXY(sx + (x - sx) * frac, sy + (y - sy) * frac);
      yield WAIT;
    }
  }
  *glideTo(secs: Value, menu: string, th?: Thread): Generator<number, void, void> {
    const p = this.positionOf(menu, th);
    if (!p) return;
    yield* this.glide(secs, p[0], p[1]);
  }
  ifOnEdgeBounce() {
    const b = this.ownBounds();
    if (!b) return;
    const { hw, hh } = this.fenceHalf();
    const dL = Math.max(0, hw + b.left);
    const dT = Math.max(0, hh - b.top);
    const dR = Math.max(0, hw - b.right);
    const dB = Math.max(0, hh + b.bottom);
    let nearest = '';
    let min = Infinity;
    if (dL < min) { min = dL; nearest = 'left'; }
    if (dT < min) { min = dT; nearest = 'top'; }
    if (dR < min) { min = dR; nearest = 'right'; }
    if (dB < min) { min = dB; nearest = 'bottom'; }
    if (min > 0) return;
    const rad = degToRad(90 - this.direction);
    let dx = Math.cos(rad);
    let dy = -Math.sin(rad);
    if (nearest === 'left') dx = Math.max(0.2, Math.abs(dx));
    else if (nearest === 'top') dy = Math.max(0.2, Math.abs(dy));
    else if (nearest === 'right') dx = 0 - Math.max(0.2, Math.abs(dx));
    else if (nearest === 'bottom') dy = 0 - Math.max(0.2, Math.abs(dy));
    this.setDirection(radToDeg(Math.atan2(dy, dx)) + 90);
    const [fx, fy] = this.fence(this.x, this.y);
    this.setXY(fx, fy);
  }

  // ---------------------------------------------------------------- aparência
  show() {
    if (this.isStage) return;
    if (!this.visible) this.spawnAt = this.rt.currentMSecs;
    this.visible = true;
    this.rt.requestRedraw();
  }
  hide() {
    if (this.isStage) return;
    const was = this.visible;
    this.visible = false;
    if (was) this.rt.requestRedraw();
  }
  setCostumeIndex(i: number) {
    if (!Number.isFinite(i)) return;
    this.currentCostume = wrapClamp(Math.round(i), 0, this.costumes.length - 1);
    if (this.visible || this.isStage) this.rt.requestRedraw();
  }
  costumeIndexByName(name: string) {
    return this.costumes.findIndex((c) => c.def.name === name);
  }
  /** looks_switchcostumeto / looks_switchbackdropto */
  setCostume(arg: Value) {
    if (typeof arg === 'number') {
      this.setCostumeIndex(arg - 1);
      return;
    }
    const idx = this.costumeIndexByName(str(arg));
    if (idx !== -1) {
      this.setCostumeIndex(idx);
      return;
    }
    if (arg === 'next costume' || arg === 'next backdrop') this.setCostumeIndex(this.currentCostume + 1);
    else if (arg === 'previous costume' || arg === 'previous backdrop') this.setCostumeIndex(this.currentCostume - 1);
    else if (!(Number.isNaN(Number(arg)) || isWhiteSpace(arg))) this.setCostumeIndex(Number(arg) - 1);
  }
  nextCostume() {
    this.setCostumeIndex(this.currentCostume + 1);
  }
  costumeNumberName(which: string): Value {
    return which === 'number' ? this.currentCostume + 1 : this.costume.def.name;
  }
  setSize(size: number) {
    if (this.isStage) return;
    const c = this.costume;
    const w = c?.width || 1;
    const h = c?.height || 1;
    const minScale = Math.min(1, Math.max(5 / w, 5 / h));
    const maxScale = Math.min((1.5 * STAGE_W) / w, (1.5 * STAGE_H) / h);
    this.size = clamp(size / 100, minScale, maxScale) * 100;
    if (this.visible) this.rt.requestRedraw();
  }
  setEffect(name: string, value: number) {
    const k = name.toLowerCase() as keyof Effects;
    if (!(k in this.effects)) return;
    this.effects[k] = value;
    if (this.visible || this.isStage) this.rt.requestRedraw();
  }
  changeEffect(name: string, by: number) {
    const k = name.toLowerCase() as keyof Effects;
    if (!(k in this.effects)) return;
    this.setEffect(name, this.effects[k] + by);
  }
  clearEffects() {
    for (const k of Object.keys(this.effects) as (keyof Effects)[]) this.effects[k] = 0;
    if (this.visible || this.isStage) this.rt.requestRedraw();
  }
  say(text: Value) {
    const s = str(text);
    this.bubble = s === '' ? null : { text: s };
    this.rt.requestRedraw();
  }
  *sayFor(text: Value, secs: Value): Generator<number, void, void> {
    // "dicas de passar o mouse" (0,01 s) só existem com mouse; no toque ficariam piscando sem dar para ler
    if (num(secs) <= 0.05) return;
    this.say(text);
    yield* this.rt.wait(secs);
    this.say('');
  }
  get sizeRounded() {
    return Math.round(this.size);
  }
  get xPos() {
    return limitPrecision(this.x);
  }
  get yPos() {
    return limitPrecision(this.y);
  }

  // --------------------------------------------------------------------- som
  private soundIndex(arg: Value): number {
    const name = str(arg);
    const byName = this.sounds.findIndex((s) => s.name === name);
    if (byName !== -1) return byName;
    const n = Number(arg);
    if (!Number.isNaN(n) && !isWhiteSpace(arg) && this.sounds.length) return wrapClamp(Math.round(n) - 1, 0, this.sounds.length - 1);
    return -1;
  }
  playSound(arg: Value) {
    const i = this.soundIndex(arg);
    if (i < 0) return null;
    return this.rt.audio.play(this.def.name, this.sounds[i].file, this.volume);
  }
  *playSoundUntilDone(arg: Value): Generator<number, void, void> {
    const h = this.playSound(arg);
    if (!h) return;
    while (h.playing) yield WAIT;
  }
  setVolume(v: number) {
    this.volume = clamp(v, 0, 100);
    this.rt.audio.setOwnerVolume(this.def.name, this.volume);
  }

  // --------------------------------------------------------------- colisões
  /** alpha da fantasia atual num ponto de canvas (coordenadas 480x360, y para baixo) */
  alphaAtCanvas(X: number, Y: number): number {
    const c = this.costume;
    if (!c || c.empty) return 0;
    const [a, b, cc, d, e, f] = this.matrix();
    const det = a * d - b * cc;
    if (!det) return 0;
    const u = (d * (X - e) - cc * (Y - f)) / det;
    const v = (-b * (X - e) + a * (Y - f)) / det;
    const ix = Math.floor(u * c.kx);
    const iy = Math.floor(v * c.ky);
    if (ix < 0 || iy < 0 || ix >= c.rw || iy >= c.rh) return 0;
    return maskHit(c, ix, iy) ? 255 : 0;
  }

  touching(menu: string, th?: Thread): boolean {
    if (menu === '_mouse_') {
      const m = this.rt.mouseOf(th);
      return this.alphaAtCanvas(m.x + this.rt.viewW / 2, STAGE_H / 2 - m.y) > 0;
    }
    if (menu === '_edge_') {
      // sprites do mundo tocam a borda da TELA inteira; os do HUD, a do palco original de 480x360
      const b = this.world ? this.screenBounds() : this.ownBounds();
      if (!b) return false;
      const hw = this.world ? this.rt.viewW / 2 : STAGE_W / 2;
      return b.left < -hw || b.right > hw || b.top > STAGE_H / 2 || b.bottom < -STAGE_H / 2;
    }
    const list = this.rt.clonesOf(menu);
    if (!list.length) return false;
    const mb = this.screenBounds();
    if (!mb) return false;
    let mine: ReturnType<Target['matrix']> | null = null;
    for (const o of list) {
      if (o === this || !o.visible) continue;
      const ob = o.screenBounds();
      if (!ob) continue;
      const l = Math.max(mb.left, ob.left);
      const r = Math.min(mb.right, ob.right);
      const bt = Math.max(mb.bottom, ob.bottom);
      const tp = Math.min(mb.top, ob.top);
      if (l >= r || bt >= tp) continue;
      mine ??= this.matrix();
      if (pixelOverlap(this, mine, o, o.matrix(), l, r, bt, tp)) return true;
    }
    return false;
  }
}

/** teste de sobreposição pixel a pixel (amostragem a cada unidade do palco, como o Scratch) */
function pixelOverlap(
  A: Target,
  ma: ReturnType<Target['matrix']>,
  B: Target,
  mb: ReturnType<Target['matrix']>,
  left: number,
  right: number,
  bottom: number,
  top: number,
): boolean {
  const ca = A.costume;
  const cb = B.costume;
  const inv = (m: ReturnType<Target['matrix']>) => {
    const [a, b, c, d, e, f] = m;
    const det = a * d - b * c;
    return [d / det, -b / det, -c / det, a / det, (c * f - d * e) / det, (b * e - a * f) / det];
  };
  if (!(ma[0] * ma[3] - ma[1] * ma[2]) || !(mb[0] * mb[3] - mb[1] * mb[2])) return false;
  const ia = inv(ma);
  const ib = inv(mb);
  const hw = A.rt.viewW / 2;
  const x0 = Math.floor(left + hw);
  const x1 = Math.ceil(right + hw);
  const y0 = Math.floor(STAGE_H / 2 - top);
  const y1 = Math.ceil(STAGE_H / 2 - bottom);
  for (let Y = y0; Y < y1; Y++) {
    const py = Y + 0.5;
    for (let X = x0; X < x1; X++) {
      const px = X + 0.5;
      const ua = Math.floor((ia[0] * px + ia[2] * py + ia[4]) * ca.kx);
      const va = Math.floor((ia[1] * px + ia[3] * py + ia[5]) * ca.ky);
      if (ua < 0 || va < 0 || ua >= ca.rw || va >= ca.rh || !maskHit(ca, ua, va)) continue;
      const ub = Math.floor((ib[0] * px + ib[2] * py + ib[4]) * cb.kx);
      const vb = Math.floor((ib[1] * px + ib[3] * py + ib[5]) * cb.ky);
      if (ub < 0 || vb < 0 || ub >= cb.rw || vb >= cb.rh || !maskHit(cb, ub, vb)) continue;
      return true;
    }
  }
  return false;
}

export { bool };
