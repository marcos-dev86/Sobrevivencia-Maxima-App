// GERADO por tools/transpile.mjs a partir de "laser" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      t.hide();
      for (;;) {
        if (eq(G["in-game"], "true")) {
          if (eq(G["md bow"], "true")) {
            if (eq(G["bat equiped"], "false")) {
              t.show();
              t.goTo("bow", th);
              if (gt(G["z speed"], "0")) {
                if (eq(G["mobile mode"], "true")) {
                  t.setDirection(num(G["direction to move"]));
                } else {
                  t.pointTowards("_mouse_", th);
                }
              }
            } else {
              t.hide();
            }
          }
        } else {
          t.hide();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      G["md bow"] = "false";
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        t.setCostume("1");
        yield* rt.wait("0.1");
        t.setCostume("2");
        yield* rt.wait("0.1");
        yield LOOP;
      }
    },
  },
];
