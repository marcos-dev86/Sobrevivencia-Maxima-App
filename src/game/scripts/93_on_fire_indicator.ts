// GERADO por tools/transpile.mjs a partir de "on fire indicator" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.hide();
      G["on fire"] = "false";
      for (;;) {
        if (eq(G["on fire"], "true")) {
          G["health"] = num(G["health"]) + -5;
          yield* rt.wait("1");
          rt.broadcast("p damaged", th);
          G["fire time"] = num(G["fire time"]) + -1;
          if (eq(G["fire time"], "0")) {
            rt.broadcast("on fire stop", th);
          }
        } else {
          G["fire time"] = "";
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "on fire start" },
    fn: function* (t, th) {
      G["on fire"] = "true";
      if (eq(G["bleeding"], "false")) {
        t.setXY(290, 28);
        t.show();
        for (let n = Math.round(14); n > 0; n--) {
          t.changeX(-9);
          yield LOOP;
        }
      } else {
        t.setXY(290, 16);
        t.show();
        for (let n = Math.round(14); n > 0; n--) {
          t.changeX(-9);
          yield LOOP;
        }
      }
    },
  },
  {
    hat: { k: "broadcast", name: "on fire stop" },
    fn: function* (t, th) {
      G["on fire"] = "false";
      for (let n = Math.round(14); n > 0; n--) {
        t.changeX(9);
        yield LOOP;
      }
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
