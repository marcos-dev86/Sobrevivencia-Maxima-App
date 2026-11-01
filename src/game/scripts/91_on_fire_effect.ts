// GERADO por tools/transpile.mjs a partir de "on fire effect" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["on fire"], "true")) {
          if (gt(G["health"], "0")) {
            t.setCostume("1");
            t.show();
            t.setCostume("1");
            yield* rt.wait("0.1");
            t.setCostume("2");
            yield* rt.wait("0.1");
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
      t.setSize(80);
      for (;;) {
        t.goTo("player", th);
        t.changeY(42);
        t.changeX(5);
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
      yield* rt.wait("0.5");
      G["on fire"] = "false";
    },
  },
];
