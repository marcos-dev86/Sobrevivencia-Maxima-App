import type { GameConfig } from '../engine/runtime';

/**
 * Ajustes da versão Android/React em relação ao projeto Scratch original.
 * Tudo o que NÃO está aqui (sprites, nomes, fantasias, sons, scripts) é idêntico ao original.
 */
export const gameConfig: GameConfig = {
  // Mundo de 9 chunks (3 x 3). Cada chunk tem o tamanho de uma tela do Scratch (480 x 360).
  chunks: { cols: 3, rows: 3 },

  // Sprites que vivem no mundo e rolam com a câmera. O resto (botões, joystick, textos, barras
  // de chefe, loja, conquistas...) é HUD e fica preso à tela, como no original.
  worldSprites: [
    'player', 'bat', 'bat hitbox', 'bow', 'laser', 'koc hitbox',
    'zombie', 'zombie2', 'zombie3', 'zombie knight',
    'shield', 'shield2', 'shield3',
    'z death explosion', 'z death explosion2', 'z death explosion3',
    'z armor death explosion', 'boss death explosion',
    'boss brute', 'boss trans', 'boss hipnotiser', 'hipno laser', 'boss warning',
    'fire', 'fire ring', 'p health', 'z knight health', 'on fire effect', 'bleed particles',
  ],

  // (a lista usada na transpilação está em transpile-config.json)
  screenRelativeGoto: [],

  cameraTarget: 'player',

  // Este APK é a versão MOBILE: a tela "PC / Mobile" é pulada e o modo mobile é escolhido sozinho.
  autoClick: 'mobile mode',

  maxClones: 300,

  // Telas largas (celular em paisagem): joystick e botões ficam mais perto das bordas para os polegares.
  hudShift: {
    Joystick: -1,
    base: -1,
    pointer: -1,
    'Attack button': 1,
    'dash button': 1,
    'cooldown dash mobile blocker': 1,
    // HUD do topo: almas no canto esquerdo; loja e pausa no direito
    'souls sign': -1,
    'souls number': -1,
    store: 1,
    pause: 1,
  },
};

/** Inimigos comuns que são "reciclados" quando ficam longe demais da câmera (mundo é maior que a tela). */
export const recycle = {
  /** quanto além da borda da tela (em px) um inimigo pode ficar antes de reaparecer na borda */
  marginX: 320,
  maxDy: 440,
  enemies: [
    { sprite: 'zombie', respawn: 'respawn z' },
    { sprite: 'zombie2', respawn: 'respawn z2' },
    { sprite: 'zombie3', respawn: 'respawn z3' },
    { sprite: 'zombie knight', respawn: 'respawn armored' },
  ],
};
