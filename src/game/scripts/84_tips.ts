// GERADO por tools/transpile.mjs a partir de "tips" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.hide();
      rt.goToLayer(t, "front");
      G["tip change time"] = "3";
      for (;;) {
        yield* rt.wait(G["tip change time"]);
        t.setCostume(rand("1", "9"));
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
