// GERADO por tools/transpile.mjs a partir de "bat hitbox" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.show();
      for (;;) {
        t.goTo("player", th);
        if (eq(G["kingofcuts"], "true")) {
          t.hide();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setCostume("swd hitbox");
      t.setEffect("GHOST", 90);
      t.setSize(40);
      rt.goToLayer(t, "back");
      for (;;) {
        if (eq(G["Big Hammer"], "false")) {
          t.pointTowards("mouse click", th);
        } else {
          t.setDirection(0);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "size up" },
    fn: function* (t, th) {
      if (gt(t.sizeRounded, "54")) {
        t.setSize(55);
        rt.broadcast("max sword", th);
        rt.broadcast("Max", th);
        return;
      }
      if (eq(t.sizeRounded, "45")) {
        if (gt(G["Almas"], "24")) {
          t.setSize(t.size + 5);
          G["Almas"] = num(G["Almas"]) + -25;
          rt.broadcast("bought", th);
          return;
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (eq(t.sizeRounded, "40")) {
        if (gt(G["Almas"], "14")) {
          t.setSize(t.size + 5);
          G["Almas"] = num(G["Almas"]) + -15;
          rt.broadcast("bought", th);
          return;
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
      if (eq(t.sizeRounded, "50")) {
        if (gt(G["Almas"], "39")) {
          t.setSize(t.size + 5);
          G["Almas"] = num(G["Almas"]) + -40;
          rt.broadcast("bought", th);
          return;
        } else {
          rt.broadcast("can´t afford", th);
        }
      }
    },
  },
  {
    hat: { k: "broadcast", name: "mobile mode" },
    fn: function* (t, th) {
      rt.stopOtherScripts(t, th);
      t.show();
      for (;;) {
        if (eq(G["Big Hammer"], "false")) {
          t.setDirection(num(G["direction to move"]));
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "key", key: "2" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "key", key: "1" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "equip sword" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "equip bow" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.v["fully maxed"] = "false";
      while (!eq(t.v["fully maxed"], "true")) {
        for (let n = Math.round(2); n > 0; n--) {
          if ((lt(G["shoot speed"], "0.21") && (gt(t.sizeRounded, "54") && (gt(G["dash distance"], "39") && gt(G["walkspeed"], "6"))))) {
            t.v["fully maxed"] = "true";
          }
          if (eq(t.v["fully maxed"], "true")) {
            rt.broadcast("fully maxed", th);
          }
          yield LOOP;
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      if (eq(G["kingofcuts"], "false")) {
        if (eq(G["bat equiped"], "true")) {
          if (!(t.touching("zombie", th) || (t.touching("zombie2", th) || (t.touching("zombie3", th) || (t.touching("zombie knight", th) || (t.touching("boss brute", th) || (t.touching("boss trans", th) || t.touching("boss hipnotiser", th)))))))) {
            t.playSound("miss");
          } else {
            t.playSound("damage");
          }
        }
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      while (!eq(G["Big Hammer"], "true")) yield WAIT;
      t.setDirection(0);
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["bat equiped"], "false")) {
          t.hide();
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
    hat: { k: "broadcast", name: "size reset" },
    fn: function* (t, th) {
      t.setSize(40);
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      if (eq(G["hitbox"], "true")) {
        if (eq(G["Big Hammer"], "false")) {
          t.setEffect("GHOST", 99.9);
          rt.createClone(t);
          t.setCostume("swd hitbox");
        } else {
          t.setEffect("GHOST", 99.9);
          rt.createClone(t);
          t.setCostume("Allc hitbox");
        }
      } else {
        if (eq(G["Big Hammer"], "false")) {
          t.setCostume("swd hitbox");
        } else {
          t.setCostume("Allc hitbox");
        }
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      if (eq(G["Big Hammer"], "false")) {
        t.setEffect("GHOST", 20);
        t.setCostume("shown");
        yield* rt.wait("0.2");
        for (let n = Math.round(4); n > 0; n--) {
          t.changeEffect("GHOST", 20);
          yield LOOP;
        }
        if (rt.deleteThisClone(t)) return;
      } else {
        t.setEffect("GHOST", 20);
        t.setCostume("Allc shown");
        yield* rt.wait("0.2");
        for (let n = Math.round(8); n > 0; n--) {
          t.changeEffect("GHOST", 10);
          yield LOOP;
        }
        if (rt.deleteThisClone(t)) return;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        G["sword htbx Size"] = t.sizeRounded;
        yield LOOP;
      }
    },
  },
];
