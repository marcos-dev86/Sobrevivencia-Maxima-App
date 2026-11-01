// GERADO por tools/transpile.mjs a partir de "bleed particles" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["bleeding"], "true")) {
          if (gt(G["health"], "0")) {
            t.setCostume("1");
            t.show();
            t.goTo("player", th);
            yield* rt.wait("0.2");
            t.setCostume("2");
            yield* rt.wait("0.2");
            if (eq(t.v["blood splatter chance"], "3")) {
              t.setCostume("3");
            } else {
              t.setCostume("3.2");
            }
            yield* rt.wait("0.6");
          }
        } else {
          t.hide();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setSize(30);
      for (;;) {
        t.v["blood splatter chance"] = "3";
        t.v["blood splatter chance"] = "other";
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
      yield* rt.wait("0.5");
      G["bleeding"] = "false";
    },
  },
];
