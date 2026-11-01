// GERADO por tools/transpile.mjs a partir de "hitbox on" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setXY(146, 29);
      rt.goToLayer(t, "front");
      G["hitbox"] = "false";
      t.hide();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      t.hide();
      rt.broadcast("hitbox off", th);
      G["hitbox"] = "false";
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      if (eq(G["hitbox"], "true")) {
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "hitbox on" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
