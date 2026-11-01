// GERADO por tools/transpile.mjs a partir de "comandos" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["in-game"], "true")) {
          if ((rt.keyDown("b") && (rt.keyDown("r") && rt.keyDown("u")))) {
            rt.broadcast("boss time", th);
          }
          if ((rt.keyDown("t") && (rt.keyDown("r") && ((rt.keyDown("a") && rt.keyDown("n")) && rt.keyDown("s"))))) {
            rt.broadcast("boss time2", th);
          }
          if (((rt.keyDown("h") && rt.keyDown("i")) && ((rt.keyDown("p") && rt.keyDown("n")) && rt.keyDown("o")))) {
            rt.broadcast("boss time3", th);
          }
          if ((rt.keyDown("a") && (rt.keyDown("r") && rt.keyDown("m")))) {
            rt.broadcast("respawn armored", th);
          }
        }
        yield LOOP;
      }
    },
  },
];
