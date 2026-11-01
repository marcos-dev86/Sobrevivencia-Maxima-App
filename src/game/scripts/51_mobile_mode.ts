// GERADO por tools/transpile.mjs a partir de "mobile mode" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setXY(110, -30);
      t.show();
      G["mobile mode"] = "false";
      G["mobile starter"] = "0";
      t.setCostume("X");
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      t.hide();
      rt.broadcast("mobile mode", th);
      rt.broadcast("go to menu", th);
      G["mobile mode"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      G["mobile starter"] = "1";
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
