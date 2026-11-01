// GERADO por tools/transpile.mjs a partir de "store" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.setXY(160, 155);
      t.show();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 14, "forward");
      G["store open"] = "false";
      t.hide();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      if (eq(G["store open"], "false")) {
        G["store open"] = "true";
        G["z speed"] = "0";
        G["boss speed"] = "0";
        rt.broadcast("store open", th);
      } else {
        G["store open"] = "false";
        G["z speed"] = "1";
        G["boss speed"] = "0.5";
        rt.broadcast("store close", th);
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("_mouse_", th)) {
          t.setSize(t.size + 5);
        } else {
          t.setSize(t.size + -5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (gt(t.sizeRounded, "55")) {
          t.setSize(t.size + -5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (lt(t.sizeRounded, "45")) {
          t.setSize(t.size + 5);
        }
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
    hat: { k: "broadcast", name: "koc attack" },
    fn: function* (t, th) {
      if (eq(G["koc mobile active"], "true")) {
        t.hide();
        yield* rt.wait("0.1");
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
      G["health"] = "100";
      G["shoot speed"] = "0.40";
      G["Big Hammer"] = "0";
    },
  },
  {
    hat: { k: "broadcast", name: "boss time" },
    fn: function* (t, th) {
      while (!(eq(G["Brute health"], "0") || eq(G["health"], "0"))) {
        t.hide();
        yield LOOP;
      }
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "boss time2" },
    fn: function* (t, th) {
      while (!(eq(G["transfigured health"], "0") || eq(G["health"], "0"))) {
        t.hide();
        yield LOOP;
      }
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "boss time3" },
    fn: function* (t, th) {
      while (!(eq(G["hipno health"], "0") || eq(G["health"], "0"))) {
        t.hide();
        yield LOOP;
      }
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      t.show();
    },
  },
];
