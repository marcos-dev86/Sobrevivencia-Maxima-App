// GERADO por tools/transpile.mjs a partir de "dash cooldown timer" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      if (lt(G["mobile starter"], "0")) {
        for (;;) {
          t.hide();
          yield LOOP;
        }
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      G["dash energy"] = "3";
      t.setXY(167, 117);
      rt.goToLayer(t, "front");
      t.hide();
      for (;;) {
        if (lt(G["dash energy"], "1")) {
          G["dash energy"] = "1";
        }
        t.setCostume(G["dash energy"]);
        if (eq(G["Soul Dash"], "true")) {
          if (eq(G["dashing"], "true")) {
            t.show();
            G["dash energy"] = num(G["dash energy"]) + -1;
            yield* rt.wait("0.5");
          } else {
            t.hide();
            if (lt(G["dash energy"], "3")) {
              G["dash energy"] = num(G["dash energy"]) + 1;
              yield* rt.wait("1");
              if (eq(G["dash energy"], "0")) {
                G["dash distance"] = "1";
                yield* rt.wait("5");
              }
            }
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dash" },
    fn: function* (t, th) {
      if (eq(G["mobile mode"], "false")) {
        if (eq(G["Soul Dash"], "true")) {
          if (lt(G["dash energy"], "1")) {
            rt.broadcast("stop soul dash", th);
          } else {
            t.show();
            yield* rt.wait("1");
            G["dash energy"] = num(G["dash energy"]) + -1;
          }
        } else {
          t.setCostume("1");
          t.show();
          G["dash energy"] = "1";
          yield* rt.wait("1");
          t.setCostume("2");
          G["dash energy"] = "2";
          yield* rt.wait("1");
          t.setCostume("3");
          G["dash energy"] = "3";
          yield* rt.wait("1");
          t.hide();
        }
      }
    },
  },
];
