// GERADO por tools/transpile.mjs a partir de "hitbox off" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setXY(146, 29);
      rt.goToLayer(t, "front");
      t.hide();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      t.hide();
      rt.broadcast("hitbox on", th);
      G["hitbox"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "hitbox off" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      if (eq(G["hitbox"], "false")) {
        t.show();
      }
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
