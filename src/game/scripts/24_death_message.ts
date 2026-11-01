// GERADO por tools/transpile.mjs a partir de "death message" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.v["skiped"] = "false";
      G["derrubadas com o bastão"] = "0";
      G["derrubadas com o arco"] = "0";
      G["derrubadas totais"] = "0";
      t.setXY(2, 5);
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      G["in-game"] = "false";
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      t.setCostume("paused");
      rt.goToLayer(t, "front");
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      t.hide();
      rt.goToLayer(t, "front");
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.setCostume("death");
      t.show();
      while (!gt(G["health"], "0")) {
        if (rt.mouseDown(th)) {
          rt.broadcast("show bat kills", th);
          rt.broadcast("show bow kills", th);
          t.v["skiped"] = "true";
          return;
        }
        yield LOOP;
      }
    },
  },
];
