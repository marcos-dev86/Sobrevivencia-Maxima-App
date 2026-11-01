// GERADO por tools/transpile.mjs a partir de "zombie knight" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      yield* rt.wait("120");
      rt.broadcast("respawn armored", th);
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 1, "forward");
      t.setRotationStyle("left-right");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      if (t.touching("bat hitbox", th)) {
        G["z armor hp"] = num(G["z armor hp"]) + -1;
        t.move(-15);
        t.setCostume("hurt");
        yield* rt.wait("0.5");
        t.setCostume("     idle z");
      }
    },
  },
  {
    hat: { k: "broadcast", name: "respawn armored" },
    fn: function* (t, th) {
      t.hide();
      G["z armor hp"] = "3";
      t.goToScreen(rand("-220", "220"), 165);
      if (gt(t.v["spawn location"], "1")) {
        t.goToScreen(rand("-220", "220"), -180);
        if (gt(t.v["spawn location"], "2")) {
          t.goToScreen(-240, rand("-175", "175"));
          if (gt(t.v["spawn location"], "3")) {
            t.goToScreen(240, rand("-175", "175"));
          }
        }
      }
      yield* rt.wait(rand("5", "10"));
      rt.broadcast("z rmor appear", th);
      t.show();
      while (!t.touching("player", th)) {
        t.pointTowards("player", th);
        t.move(num(G["z speed"]));
        yield LOOP;
      }
      rt.broadcast("respawn armored", th);
      G["health"] = num(G["health"]) + -15;
      rt.broadcast("bleeding start", th);
      G["bleed time"] = "5";
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      while (!gt(G["health"], "0")) {
        t.hide();
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "koc attack" },
    fn: function* (t, th) {
      if (t.touching("koc hitbox", th)) {
        rt.broadcast("respawn armored", th);
        rt.broadcast("+2 almass", th);
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["z armor hp"], "0")) {
          G["derrubadas totais"] = num(G["derrubadas totais"]) + 1;
          rt.broadcast("z armor dead", th);
          yield* rt.wait("0.01");
          rt.broadcast("respawn armored", th);
          rt.broadcast("+2 almass", th);
          if (eq(G["bat equiped"], "true")) {
            G["derrubadas com o bastão"] = num(G["derrubadas com o bastão"]) + 1;
          } else {
            G["derrubadas com o arco"] = num(G["derrubadas com o arco"]) + 1;
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "z armor damaged" },
    fn: function* (t, th) {
      t.setCostume("hurt");
      yield* rt.wait("0.5");
      t.setCostume("     idle z");
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      rt.stopOtherScripts(t, th);
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.v["spawn location"] = "3";
      for (;;) {
        t.v["spawn location"] = num(t.v["spawn location"]) + 1;
        if (gt(t.v["spawn location"], "4")) {
          t.v["spawn location"] = "0";
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (gt(G["z speed"], "0")) {
          t.setCostume("z walk");
          yield* rt.wait("0.2");
          t.setCostume("z walk2");
          yield* rt.wait("0.2");
        } else {
          t.setCostume("     idle z");
        }
        yield LOOP;
      }
    },
  },
];
