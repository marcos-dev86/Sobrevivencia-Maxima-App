// GERADO por tools/transpile.mjs a partir de "Stage" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      rt.stage.setCostume("game");
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        rt.resetTimer();
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "greater", test: () => rt.timer > 0 },
    fn: function* (t, th) {
      rt.stage.setCostume("tumb 3");
      rt.broadcast("back to menu", th);
      rt.broadcast("store close", th);
      rt.broadcast("stop", th);
    },
  },
  {
    hat: { k: "broadcast", name: "skins page" },
    fn: function* (t, th) {
      rt.stage.setCostume("game");
    },
  },
];
