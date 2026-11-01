// GERADO por tools/transpile.mjs a partir de "bat" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      if (eq(G["Big Hammer"], "false")) {
        if (eq(t.v["swordCombo"], "false")) {
          t.v["swordCombo"] = "true";
          t.setCostume("attack");
          yield* rt.wait("0.09");
          t.setCostume("attack 2");
          yield* rt.wait("0.11");
          t.setCostume("idle (combo)");
        } else {
          t.v["swordCombo"] = "false";
          t.setCostume("attack (combo)");
          yield* rt.wait("0.09");
          t.setCostume("attack 2 (combo)");
          yield* rt.wait("0.11");
          t.setCostume("idle");
        }
      } else {
        t.setCostume("attack");
        t.setDirection(t.direction - 50);
        yield* rt.wait("0.09");
        t.setCostume("attack 2");
        t.setDirection(t.direction - 50);
        yield* rt.wait("0.09");
        t.setCostume("attack");
        t.setDirection(t.direction - 50);
        yield* rt.wait("0.09");
        t.setDirection(t.direction - 50);
        yield* rt.wait("0.09");
        t.setDirection(t.direction - 50);
        t.setCostume("attack 2");
        yield* rt.wait("0.09");
        t.setDirection(t.direction - 50);
        t.setCostume("attack");
        yield* rt.wait("0.09");
        t.setDirection(t.direction - 60);
        t.setCostume("idle");
        t.setDirection(0);
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setCostume("idle");
      t.setSize(55);
      rt.goToLayer(t, "back");
      rt.goLayers(t, 6, "forward");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["Big Hammer"], "false")) {
          t.pointTowards("mouse click", th);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (rt.keyDown("1")) {
          G["bat equiped"] = "true";
          t.show();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (rt.keyDown("2")) {
          G["bat equiped"] = "false";
          t.hide();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "equip sword" },
    fn: function* (t, th) {
      if (eq(G["kingofcuts"], "false")) {
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "equip bow" },
    fn: function* (t, th) {
      t.hide();
      G["bat equiped"] = "false";
    },
  },
  {
    hat: { k: "broadcast", name: "size up" },
    fn: function* (t, th) {
      if (gt(t.sizeRounded, "84")) {
        t.setSize(85);
        return;
      }
      if (lt(G["Almas"], "15")) {
        return;
      }
      t.setSize(t.size + 10);
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["kingofcuts"], "true")) {
          G["bat equiped"] = "true";
          t.hide();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.v["swordCombo"] = "false";
      while (!eq(G["Big Hammer"], "true")) yield WAIT;
      t.setDirection(0);
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
      rt.stopOtherScripts(t, th);
    },
  },
  {
    hat: { k: "broadcast", name: "size reset" },
    fn: function* (t, th) {
      t.setSize(55);
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      if (eq(G["mobile mode"], "true")) {
        for (;;) {
          if (eq(G["Big Hammer"], "false")) {
            t.setDirection(num(G["direction to move"]));
          }
          yield LOOP;
        }
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      G["bat equiped"] = "true";
      t.show();
      for (;;) {
        t.goTo("player", th);
        G["bat direction"] = t.direction;
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
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      if (eq(G["bat equiped"], "true")) {
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
