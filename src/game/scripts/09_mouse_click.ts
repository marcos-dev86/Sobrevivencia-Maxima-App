// GERADO por tools/transpile.mjs a partir de "mouse click" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.show();
      while (!eq(G["health"], "0")) {
        if (eq(G["mobile mode"], "false")) {
          if (eq(G["store open"], "false")) {
            t.goTo("_mouse_", th);
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      if (eq(G["kingofcuts"], "true")) {
        rt.broadcast("koc attack", th);
        return;
      }
      if (eq(G["bat equiped"], "true")) {
        if (lt(t.v["timer"], "0.01")) {
          rt.broadcast("attack", th);
          t.v["timer"] = "0.09";
        }
      } else {
        rt.broadcast("attack", th);
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 12, "forward");
      t.setEffect("GHOST", 99.9);
    },
  },
  {
    hat: { k: "broadcast", name: "mobile mode" },
    fn: function* (t, th) {
      for (;;) {
        t.hide();
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["NoCooldown"], "true")) {
          G["shoot speed"] = "0";
          t.v["timer"] = "0";
        }
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
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.v["timer"] = "0";
      for (;;) {
        if (gt(t.v["timer"], "0")) {
          yield* rt.wait("0.01");
          t.v["timer"] = num(t.v["timer"]) + -0.01;
        }
        yield LOOP;
      }
    },
  },
];
