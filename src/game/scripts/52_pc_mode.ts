// GERADO por tools/transpile.mjs a partir de "pc mode" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setXY(-100, -30);
      t.show();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      rt.broadcast("go to menu", th);
    },
  },
  {
    hat: { k: "broadcast", name: "go to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "stop" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
