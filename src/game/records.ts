import { num } from '../engine/cast';
import type { Runtime } from '../engine/runtime';
import { storage } from '../platform/storage';

/**
 * Recordes locais (ficam salvos no aparelho, em AsyncStorage — sobrevivem ao fechar o app).
 *  - kills: maior número de abates (derrubadas totais) em uma partida  -> a "pontuação" do jogo
 *  - souls: maior quantidade de almas acumuladas ao mesmo tempo
 *  - plays: partidas jogadas
 */
export interface Records {
  kills: number;
  souls: number;
  plays: number;
}

const KEY = 'sobrevivencia-maxima:records:v1';

function save(r: Records) {
  storage.set(KEY, JSON.stringify(r));
}

export const records: Records = { kills: 0, souls: 0, plays: 0 };

/** Lê os recordes salvos no aparelho (chamar uma vez antes de começar). */
export async function loadRecords() {
  const raw = await storage.get(KEY);
  if (!raw) return;
  try {
    const r = JSON.parse(raw);
    records.kills = num(r.kills);
    records.souls = num(r.souls);
    records.plays = num(r.plays);
  } catch {
    /* dados corrompidos: começa do zero */
  }
}

/** estado da partida atual (não persistido) */
export const run = { active: false, kills: 0, souls: 0, baseKills: 0, brokeRecord: false };

export function resetRecords() {
  records.kills = 0;
  records.souls = 0;
  records.plays = 0;
  save(records);
}

/** Acompanha a partida a cada quadro e grava o recorde assim que ele é batido. */
export function trackRecords(rt: Runtime) {
  const inGame = String(rt.G['in-game']) === 'true';
  if (inGame && !run.active) {
    // início de partida
    run.active = true;
    run.kills = 0;
    run.souls = 0;
    run.baseKills = records.kills;
    run.brokeRecord = false;
    records.plays++;
    save(records);
  }
  if (inGame) {
    const kills = num(rt.G['derrubadas totais']);
    const souls = num(rt.G['Almas']);
    run.kills = kills;
    run.souls = Math.max(run.souls, souls);
    let dirty = false;
    if (kills > records.kills) {
      records.kills = kills;
      dirty = true;
      run.brokeRecord = kills > run.baseKills;
    }
    if (run.souls > records.souls) {
      records.souls = run.souls;
      dirty = true;
    }
    if (dirty) save(records);
  } else if (run.active && String(rt.G['in-game']) === 'false') {
    run.active = false; // partida terminou (morte ou voltou ao menu); run.* fica para a tela de morte
  }
}

export function installRecords(rt: Runtime) {
  if (!rt.afterStep.includes(trackRecords)) rt.afterStep.push(trackRecords);
}
