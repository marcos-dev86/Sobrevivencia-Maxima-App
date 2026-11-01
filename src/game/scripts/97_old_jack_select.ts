// GERADO por tools/transpile.mjs a partir de "old jack select" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "back to menu" },
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
  {
    hat: { k: "broadcast", name: "skins page" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      if (eq(G["selected skin"], "jack")) {
        rt.broadcast("skin change", th);
        G["selected skin"] = "old jack";
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setXY(178, 31);
      t.hide();
    },
  },
];
