// GERADO por tools/transpile.mjs a partir de "zombie" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      rt.broadcast("respawn z", th);
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 1, "forward");
      G["z speed"] = "1";
      t.setRotationStyle("left-right");
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      for (let n = Math.round(1); n > 0; n--) {
        if (t.touching("bat hitbox", th)) {
          t.hide();
          G["derrubadas com o bastão"] = num(G["derrubadas com o bastão"]) + 1;
          G["derrubadas totais"] = num(G["derrubadas totais"]) + 1;
          rt.broadcast("+1 alma", th);
          rt.broadcast("z dead1", th);
          rt.broadcast("respawn z", th);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "respawn z" },
    fn: function* (t, th) {
      t.hide();
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
      yield* rt.wait(rand("1", "5"));
      rt.broadcast("shield up 1", th);
      t.show();
      while (!t.touching("player", th)) {
        t.pointTowards("player", th);
        t.move(num(G["z speed"]));
        yield LOOP;
      }
      rt.broadcast("respawn z", th);
      G["health"] = num(G["health"]) + -10;
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      for (;;) {
        t.hide();
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "koc attack" },
    fn: function* (t, th) {
      if (t.touching("koc hitbox", th)) {
        rt.broadcast("respawn z", th);
        rt.broadcast("+1 alma", th);
      }
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
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.v["spawn location"] = "0";
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
          t.setCostume(" idle z");
        }
        yield LOOP;
      }
    },
  },
];
