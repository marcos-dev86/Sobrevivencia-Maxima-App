// GERADO por tools/transpile.mjs a partir de "bow shot rate upg" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 16, "forward");
      t.setXY(-180, -1);
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
      if (lt(G["shoot speed"], "0.21")) {
        G["shoot speed"] = "0.20";
        rt.broadcast("Max", th);
        return;
      }
      if (lt(G["shoot speed"], "0.26")) {
        if (gt(G["Almas"], "49")) {
          t.setCostume("máx");
          G["Almas"] = num(G["Almas"]) + -50;
          G["shoot speed"] = num(G["shoot speed"]) + -0.05;
          rt.broadcast("bought", th);
          return;
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (lt(G["shoot speed"], "0.31")) {
        if (gt(G["Almas"], "39")) {
          t.setCostume("50");
          G["Almas"] = num(G["Almas"]) + -40;
          G["shoot speed"] = num(G["shoot speed"]) + -0.05;
          rt.broadcast("bought", th);
          return;
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (lt(G["shoot speed"], "0.36")) {
        if (gt(G["Almas"], "29")) {
          t.setCostume("40");
          G["Almas"] = num(G["Almas"]) + -30;
          G["shoot speed"] = num(G["shoot speed"]) + -0.05;
          rt.broadcast("bought", th);
          return;
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (lt(G["shoot speed"], "0.41")) {
        if (gt(G["Almas"], "19")) {
          t.setCostume("30");
          G["Almas"] = num(G["Almas"]) + -20;
          G["shoot speed"] = num(G["shoot speed"]) + -0.05;
          rt.broadcast("bought", th);
          return;
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
      if ((eq(G["batonly"], "false") && (eq(G["kingofcuts"], "false") && eq(G["NoCooldown"], "false")))) {
        t.show();
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
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.setCostume("20");
    },
  },
];
