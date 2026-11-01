// GERADO por tools/transpile.mjs a partir de "bat kills sign" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "hide bat kills" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.hide();
      rt.goToLayer(t, "front");
      t.setXY(-106, -82);
    },
  },
  {
    hat: { k: "broadcast", name: "show bat kills" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      rt.broadcast("show bat kills", th);
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      rt.broadcast("hide bat kills", th);
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      rt.broadcast("hide bat kills", th);
    },
  },
];
