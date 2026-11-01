import type { Runtime } from '../engine/runtime';
import { STAGE_H, STAGE_W } from '../engine/types';
import { recycle } from './config';

/** hash determinístico (mesmo chão em toda partida) */
export function hash(x: number, y: number, s = 0): number {
  let h = (x * 374761393 + y * 668265263 + s * 2147483647) | 0;
  h = (h ^ (h >>> 13)) * 1274126177;
  h = h ^ (h >>> 16);
  return (h >>> 0) / 4294967296;
}

export const CELL = 40;

/**
 * Como o mundo é 9x maior que a tela, inimigos comuns que ficam muito longe da câmera
 * reaparecem na borda da tela (usando o próprio "respawn" do jogo), para o ritmo do jogo
 * continuar igual ao original.
 */
export function recycleFarEnemies(rt: Runtime) {
  if (String(rt.G['in-game']) !== 'true') return;
  for (const e of recycle.enemies) {
    const t = rt.sprite(e.sprite);
    if (!t || !t.visible) continue;
    if (Math.abs(t.x - rt.cam.x) > rt.viewW / 2 + recycle.marginX || Math.abs(t.y - rt.cam.y) > recycle.maxDy) rt.broadcast(e.respawn);
  }
}

export function installWorldRules(rt: Runtime) {
  if (!rt.afterStep.includes(recycleFarEnemies)) rt.afterStep.push(recycleFarEnemies);
}

export { STAGE_H, STAGE_W };
