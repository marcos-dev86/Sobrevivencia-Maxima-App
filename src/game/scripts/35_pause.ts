// GERADO por tools/transpile.mjs a partir de "pause" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.v["pauseOn"] = "false";
      t.setCostume("pause");
      rt.goToLayer(t, "back");
      rt.goLayers(t, 18, "forward");
      t.setXY(215, 156);
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "transition" },
    fn: function* (t, th) {
      yield* rt.wait("1");
      t.setCostume("pause");
      t.show();
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      if (eq(t.v["pauseOn"], "false")) {
        t.v["pauseOn"] = "true";
        t.setCostume("play");
        G["store open"] = "true";
        G["z speed"] = "0";
        G["boss speed"] = "0";
        rt.broadcast("store close", th);
        rt.broadcast("pause", th);
      } else {
        t.v["pauseOn"] = "false";
        t.setCostume("pause");
        G["store open"] = "false";
        G["z speed"] = "1";
        G["boss speed"] = "0.5";
        rt.broadcast("pause off", th);
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.setCostume("pause");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
      t.setCostume("pause");
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
];
