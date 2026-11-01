// GERADO por tools/transpile.mjs a partir de "shield3" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      G["shield chance 3"] = "0";
      rt.goToLayer(t, "back");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        t.goTo("zombie3", th);
        t.pointTowards("bow", th);
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "shield up 3" },
    fn: function* (t, th) {
      if (eq(G["shield chance 3"], "1")) {
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "respawn z3" },
    fn: function* (t, th) {
      G["shield chance 3"] = "0";
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "respawn z3" },
    fn: function* (t, th) {
      G["shield chance 3"] = num(G["shield chance 3"]) + rand("0", "10");
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["store open"], "false")) {
          yield* rt.wait("0.3");
          t.setCostume("costume2");
          yield* rt.wait("0.3");
          t.setCostume("costume1");
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      for (;;) {
        t.hide();
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
