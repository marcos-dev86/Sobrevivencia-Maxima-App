// GERADO por tools/transpile.mjs a partir de "dash distance upgrade" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      G["dash distance"] = "25";
      t.setXY(-181, 91);
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
      rt.goToLayer(t, "back");
      rt.goLayers(t, 16, "forward");
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
    hat: { k: "click" },
    fn: function* (t, th) {
      if (gt(G["dash distance"], "39")) {
        t.setCostume("máx");
        rt.broadcast("Max", th);
        return;
      }
      if (eq(G["dash distance"], "35")) {
        if (gt(G["Almas"], "29")) {
          t.setCostume("máx");
          G["Almas"] = num(G["Almas"]) + -30;
          G["dash distance"] = num(G["dash distance"]) + 5;
          rt.broadcast("bought", th);
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (eq(G["dash distance"], "30")) {
        if (gt(G["Almas"], "19")) {
          t.setCostume("30");
          G["Almas"] = num(G["Almas"]) + -20;
          G["dash distance"] = num(G["dash distance"]) + 5;
          rt.broadcast("bought", th);
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (eq(G["dash distance"], "25")) {
        if (gt(G["Almas"], "9")) {
          t.setCostume("20");
          G["Almas"] = num(G["Almas"]) + -10;
          G["dash distance"] = num(G["dash distance"]) + 5;
          rt.broadcast("bought", th);
        } else {
          rt.broadcast("can´t afford", th);
        }
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
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.setCostume("10");
    },
  },
];
