import type { Value } from '../engine/cast';
import type { Runtime } from '../engine/runtime';
import { storage } from '../platform/storage';
import { runFlags } from './extras';
import { records, run } from './records';

/**
 * Salvamento da partida. Guarda o "ponto em que o jogador parou": almas, vida, abates, melhorias compradas,
 * arma, posição no mapa... Ao continuar, o jogo reinicia a partida normalmente (o mesmo fluxo do botão Jogar)
 * e, assim que ela começa, devolve esses valores. Inimigos/chefes em cena renascem do zero.
 */
const KEY = 'sobrevivencia-maxima:save:v1';

const G_KEYS = [
  'health', 'Almas', 'derrubadas com o bastão', 'derrubadas com o arco', 'derrubadas totais',
  'Big Hammer', 'md bow', 'cur-ava', 'Soul Dash', 'walkspeed', 'shoot speed', 'dash distance',
  'sword htbx Size', 'selected skin', 'bat equiped', 'hitbox', 'batonly', 'kingofcuts', 'NoCooldown',
  'total souls', 'z armor hp', 'shield chance', 'shield chance 2', 'shield chance 3',
];
/** variáveis locais de sprites que guardam melhorias */
const LOCALS: [string, string][] = [
  ['bat hitbox', 'fully maxed'],
  ['p health', 'hp max'],
  ['Curse Avatar buy', 'heal chance'],
  ['Soul dash buy', 'heal chance'],
];
/** sprites da loja: o ícone (fantasia) mostra o nível comprado */
const SHOP_COSTUMES = [
  'walkspeed upgrade', 'bat length upgrade', 'dash distance upgrade', 'bow shot rate upg',
  'Allc buy', 'modern bow buy', 'Curse Avatar buy', 'Soul dash buy',
];

export interface Snapshot {
  v: 1;
  savedAt: number;
  G: Record<string, Value>;
  locals: Record<string, Value>;
  costumes: Record<string, number>;
  px: number;
  py: number;
  flags: { codeUsed: boolean; bought: boolean };
  kills: number;
  souls: number;
}

export function takeSnapshot(rt: Runtime): Snapshot | null {
  if (!rt.loaded || String(rt.G['in-game']) !== 'true') return null;
  const player = rt.sprite('player');
  if (!player || Number(rt.G['health']) <= 0) return null;
  const G: Record<string, Value> = {};
  for (const k of G_KEYS) if (k in rt.G) G[k] = rt.G[k];
  const locals: Record<string, Value> = {};
  for (const [s, k] of LOCALS) {
    const t = rt.sprite(s);
    if (t && k in t.v) locals[`${s}|${k}`] = t.v[k];
  }
  const costumes: Record<string, number> = {};
  for (const s of SHOP_COSTUMES) {
    const t = rt.sprite(s);
    if (t) costumes[s] = t.currentCostume;
  }
  return {
    v: 1,
    savedAt: Date.now(),
    G,
    locals,
    costumes,
    px: player.x,
    py: player.y,
    flags: { ...runFlags },
    kills: Number(rt.G['derrubadas totais']) || 0,
    souls: Number(rt.G['Almas']) || 0,
  };
}

export async function loadSnapshot(): Promise<Snapshot | null> {
  const raw = await storage.get(KEY);
  if (!raw) return null;
  try {
    const s = JSON.parse(raw);
    return s && s.v === 1 ? (s as Snapshot) : null;
  } catch {
    return null;
  }
}

let lastWritten = '';
export function writeSnapshot(rt: Runtime) {
  const s = takeSnapshot(rt);
  if (!s) return;
  const json = JSON.stringify(s);
  if (json === lastWritten) return;
  lastWritten = json;
  storage.set(KEY, json);
}
export function clearSnapshot() {
  lastWritten = '';
  storage.set(KEY, '');
}

// ------------------------------------------------------------ continuar partida
let pending: { snap: Snapshot; frames: number } | null = null;

/** Começa a partida do ponto salvo (o mesmo caminho do botão "Jogar", depois devolve o estado). */
export function resumeGame(rt: Runtime, snap: Snapshot) {
  pending = { snap, frames: -1 };
  rt.greenFlag();
  const play = rt.sprite('play button');
  if (play) rt.startHats((s) => s.hat.k === 'click', play, null, true);
}

export function cancelPendingResume() {
  pending = null;
}

function apply(rt: Runtime, s: Snapshot) {
  Object.assign(rt.G, s.G);
  for (const [k, v] of Object.entries(s.locals)) {
    const [sprite, key] = k.split('|');
    const t = rt.sprite(sprite);
    if (t) t.v[key] = v;
  }
  for (const [name, idx] of Object.entries(s.costumes)) rt.sprite(name)?.setCostumeIndex(idx);
  const p = rt.sprite('player');
  if (p) p.setXY(s.px, s.py);
  runFlags.codeUsed = s.flags.codeUsed;
  runFlags.bought = s.flags.bought;
  run.baseKills = records.kills;
}

/** roda a cada quadro: espera a partida começar e então devolve os valores salvos */
export function applyPendingResume(rt: Runtime) {
  if (!pending) return;
  if (String(rt.G['in-game']) !== 'true') return;
  if (pending.frames < 0) pending.frames = 0;
  if (++pending.frames < 5) return; // deixa os scripts "Start" terminarem de inicializar
  apply(rt, pending.snap);
  pending = null;
}

/** salva a cada ~2 s durante a partida e apaga o salvamento quando ela termina (morte / voltar ao menu) */
let lastSave = 0;
let wasIn = false;
export function autosave(rt: Runtime) {
  const inGame = String(rt.G['in-game']) === 'true';
  if (inGame && !pending) {
    if (rt.currentMSecs - lastSave > 2000) {
      lastSave = rt.currentMSecs;
      writeSnapshot(rt);
    }
  } else if (!inGame && wasIn) clearSnapshot();
  wasIn = inGame;
}

export function installSave(rt: Runtime) {
  if (!rt.afterStep.includes(applyPendingResume)) rt.afterStep.push(applyPendingResume, autosave);
}
