// GERADO por tools/transpile.mjs a partir de "walkspeed upgrade" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 16, "forward");
      t.setXY(-181, 135);
      t.hide();
      for (;;) {
        rt.goToLayer(t, "front");
        if (lt(t.sizeRounded, "45")) {
          t.setSize(t.size + 5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setSize(50);
      for (;;) {
        if (gt(t.sizeRounded, "50")) {
          t.setSize(t.size + -5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      if (eq(G["walkspeed"], "7")) {
        t.setCostume("máx");
        rt.broadcast("Max", th);
        return;
      }
      if (eq(G["walkspeed"], "6")) {
        if (gt(G["Almas"], "19")) {
          t.setCostume("máx");
          G["Almas"] = num(G["Almas"]) + -20;
          G["walkspeed"] = num(G["walkspeed"]) + 1;
          rt.broadcast("bought", th);
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (eq(G["walkspeed"], "5")) {
        if (gt(G["Almas"], "14")) {
          t.setCostume("20");
          G["Almas"] = num(G["Almas"]) + -15;
          G["walkspeed"] = num(G["walkspeed"]) + 1;
          rt.broadcast("bought", th);
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (eq(G["walkspeed"], "4")) {
        if (gt(G["Almas"], "9")) {
          t.setCostume("15");
          G["Almas"] = num(G["Almas"]) + -10;
          G["walkspeed"] = num(G["walkspeed"]) + 1;
          rt.broadcast("bought", th);
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (eq(G["walkspeed"], "3")) {
        if (gt(G["Almas"], "4")) {
          t.setCostume("10");
          G["Almas"] = num(G["Almas"]) + -5;
          G["walkspeed"] = num(G["walkspeed"]) + 1;
          rt.broadcast("bought", th);
        } else {
          rt.broadcast("can´t afford", th);
        }
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
    hat: { k: "broadcast", name: "store open" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "store close" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.setCostume("5");
    },
  },
];
