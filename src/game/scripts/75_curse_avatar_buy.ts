// GERADO por tools/transpile.mjs a partir de "Curse Avatar buy" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 16, "forward");
      t.setXY(-59, -1);
      t.setSize(50);
      t.hide();
      G["cur-ava"] = "false";
      for (;;) {
        if (lt(t.sizeRounded, "45")) {
          t.setSize(t.size + 5);
        }
        if (gt(t.sizeRounded, "50")) {
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
    hat: { k: "click" },
    fn: function* (t, th) {
      if (eq(G["cur-ava"], "false")) {
        if (gt(G["Almas"], "99")) {
          G["Almas"] = num(G["Almas"]) + -100;
          G["cur-ava"] = "true";
          t.setCostume("bougth");
          rt.broadcast("bought", th);
        } else {
          rt.broadcast("can´t afford", th);
        }
      } else {
        rt.broadcast("power max", th);
      }
    },
  },
  {
    hat: { k: "broadcast", name: "store close" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "store open" },
    fn: function* (t, th) {
      t.show();
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
        if (t.touching("_mouse_", th)) {
          yield* t.sayFor("Toda vez que derrotar um Amaldiçoado, tenha uma chance de recuperar vida.", "0.1");
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        t.v["heal chance"] = rand("1", "100");
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "+1 alma" },
    fn: function* (t, th) {
      if (eq(G["cur-ava"], "true")) {
        if (lt(t.v["heal chance"], "11")) {
          if (lt(G["health"], "100")) {
            G["health"] = num(G["health"]) + 25;
          }
        }
      }
    },
  },
  {
    hat: { k: "broadcast", name: "+2 almass" },
    fn: function* (t, th) {
      if (eq(G["cur-ava"], "true")) {
        if (lt(t.v["heal chance"], "11")) {
          if (lt(G["health"], "100")) {
            G["health"] = num(G["health"]) + 25;
          }
        }
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.setCostume("100");
    },
  },
];
