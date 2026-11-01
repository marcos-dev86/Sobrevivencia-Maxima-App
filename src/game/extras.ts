import type { Runtime } from '../engine/runtime';
import { storage } from '../platform/storage';

/**
 * Conquistas extras (além das 10 do Scratch original):
 *  - "Jogo Limpo": zerar o jogo (derrotar o último chefe) sem usar nenhum código
 *  - "Hardcore":   zerar o jogo sem comprar nenhuma melhoria na loja
 * Ficam salvas no aparelho (AsyncStorage), funcionam 100% offline.
 */
export type ExtraId = 'clean' | 'hardcore';

export const EXTRA_ACHIEVEMENTS: { id: ExtraId; title: string; desc: string }[] = [
  { id: 'clean', title: 'Jogo Limpo', desc: 'Obtido ao zerar o jogo sem usar nenhum código' },
  { id: 'hardcore', title: 'Hardcore', desc: 'Obtido ao zerar o jogo sem nenhuma melhoria' },
];

const KEY = 'sobrevivencia-maxima:extras:v1';

export const unlocked: Record<ExtraId, boolean> = { clean: false, hardcore: false };

/** o que aconteceu na partida atual (entra no salvamento da partida) */
export const runFlags = { codeUsed: false, bought: false };

/** aviso "Conquista desbloqueada" na tela */
const state = { toast: null as { id: ExtraId; t0: number } | null, queue: [] as { id: ExtraId; at: number }[], prevInGame: false };
export const getToast = () => state.toast;
export const TOAST_MS = 3800;

export async function loadExtras() {
  const raw = await storage.get(KEY);
  if (!raw) return;
  try {
    const r = JSON.parse(raw);
    unlocked.clean = !!r.clean;
    unlocked.hardcore = !!r.hardcore;
  } catch {
    /* ignora dados corrompidos */
  }
}

function save() {
  storage.set(KEY, JSON.stringify(unlocked));
}

function onWin(rt: Runtime) {
  if (String(rt.G['in-game']) !== 'true') return;
  // o aviso das conquistas originais aparece primeiro; o nosso entra logo depois
  let at = rt.currentMSecs + 4500;
  for (const a of EXTRA_ACHIEVEMENTS) {
    const ok = a.id === 'clean' ? !runFlags.codeUsed : !runFlags.bought;
    if (ok && !unlocked[a.id]) {
      unlocked[a.id] = true;
      state.queue.push({ id: a.id, at });
      at += TOAST_MS + 300;
    }
  }
  save();
}

function tick(rt: Runtime) {
  const inGame = String(rt.G['in-game']) === 'true';
  if (inGame && !state.prevInGame) runFlags.bought = false; // começou uma partida (códigos foram digitados antes, no menu)
  if (!inGame && state.prevInGame) runFlags.codeUsed = false; // partida terminou
  state.prevInGame = inGame;
  const now = rt.currentMSecs;
  if (state.toast && now - state.toast.t0 > TOAST_MS) state.toast = null;
  if (!state.toast && state.queue.length && now >= state.queue[0].at) {
    const next = state.queue.shift()!;
    state.toast = { id: next.id, t0: now };
    rt.sprite('achievements')?.playSound('Conquista');
  }
}

export function installExtras(rt: Runtime) {
  if (rt.afterStep.includes(tick)) return;
  rt.afterStep.push(tick);
  rt.broadcastListeners.push((name) => {
    if (name === 'CODE YES') runFlags.codeUsed = true;
    else if (name === 'BOUGHT') runFlags.bought = true;
    else if (name === 'BOSS DEAD 3') onWin(rt);
  });
}
