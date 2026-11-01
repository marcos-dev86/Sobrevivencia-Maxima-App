// GERADO por tools/transpile.mjs a partir de "jack select" — não edite à mão.
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
      if (eq(G["selected skin"], "old jack")) {
        rt.broadcast("skin change", th);
        G["selected skin"] = "jack";
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      G["selected skin"] = "jack";
      t.setXY(178, 118);
      t.hide();
    },
  },
];
