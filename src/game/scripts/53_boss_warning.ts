// GERADO por tools/transpile.mjs a partir de "boss warning" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setRotationStyle("don't rotate");
      G["boss atack"] = "false";
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss time" },
    fn: function* (t, th) {
      t.setCostume("Alert");
      G["boss atack"] = "false";
      while (!(eq(G["health"], "0") || eq(G["Brute health"], "0"))) {
        yield* rt.wait(rand("3", "8"));
        if (gt(G["Brute health"], "0")) {
          if (gt(G["z speed"], "0")) {
            rt.broadcast("boss dash", th);
            t.move(200);
            G["boss atack"] = "true";
            t.show();
            for (let n = Math.round(8); n > 0; n--) {
              t.show();
              yield* rt.wait("0.1");
              t.hide();
              yield LOOP;
            }
            t.hide();
          }
          yield* rt.wait("0.1");
          G["boss atack"] = "false";
        }
        yield LOOP;
      }
      return;
    },
  },
  {
    hat: { k: "broadcast", name: "boss time" },
    fn: function* (t, th) {
      while (!(eq(G["health"], "0") || eq(G["Brute health"], "0"))) {
        if (eq(G["boss atack"], "false")) {
          t.goTo("boss brute", th);
          t.pointTowards("player", th);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss time2" },
    fn: function* (t, th) {
      while (!(eq(G["health"], "0") || eq(G["transfigured health"], "0"))) {
        if (eq(G["boss atack"], "false")) {
          t.goTo("boss trans", th);
          t.pointTowards("player", th);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss time2" },
    fn: function* (t, th) {
      t.setCostume("Alert");
      G["boss atack"] = "false";
      while (!eq(G["transfigured health"], "0")) {
        yield* rt.wait(rand("3", "8"));
        if (gt(G["z speed"], "0")) {
          if (gt(G["transfigured health"], "0")) {
            t.goTo("player", th);
            rt.broadcast("boss spikes", th);
            G["boss atack"] = "true";
            t.show();
            for (let n = Math.round(6); n > 0; n--) {
              t.show();
              yield* rt.wait("0.1");
              t.hide();
              yield LOOP;
            }
            t.hide();
            G["boss atack"] = "false";
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
      rt.stopOtherScripts(t, th);
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss time3" },
    fn: function* (t, th) {
      G["boss atack"] = "false";
      while (!eq(G["hipno health"], "0")) {
        yield* rt.wait(rand("3", "8"));
        if ((eq(G["Laser On"], "false") && gt(G["hipno health"], "0"))) {
          G["boss speed"] = "0";
          G["boss atack"] = "true";
          t.goTo("hipno laser", th);
          rt.broadcast("Boss attack animation start", th);
          t.show();
          for (let n = Math.round(6); n > 0; n--) {
            t.show();
            t.goTo("hipno laser", th);
            yield* rt.wait("0.1");
            t.hide();
            yield LOOP;
          }
          t.hide();
          rt.broadcast("boss laser", th);
          G["boss atack"] = "false";
        }
        yield LOOP;
      }
    },
  },
];
