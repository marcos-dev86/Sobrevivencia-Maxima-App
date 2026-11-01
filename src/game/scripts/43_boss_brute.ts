// GERADO por tools/transpile.mjs a partir de "boss brute" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      G["Brute health"] = "10";
      rt.goToLayer(t, "back");
      rt.goLayers(t, 1, "forward");
      t.setRotationStyle("left-right");
      G["boss speed"] = "0.5";
      G["boss dead"] = "false";
      t.hide();
      for (;;) {
        if (gt(G["boss speed"], "0")) {
          yield* rt.wait("0.4");
          if (eq(G["boss atack"], "false")) {
            t.setCostume("walk 1");
          }
          yield* rt.wait("0.4");
          if (eq(G["boss atack"], "false")) {
            t.setCostume("walk 2");
          }
          yield* rt.wait("0.4");
          if (eq(G["boss atack"], "false")) {
            t.setCostume("walk 3");
            yield* rt.wait("0.4");
            if (eq(G["boss atack"], "false")) {
              t.setCostume("walk 4");
            }
          }
        } else {
          if (eq(G["boss atack"], "false")) {
            t.setCostume("idle");
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss time" },
    fn: function* (t, th) {
      G["Brute health"] = "10";
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
      t.show();
      while (!(eq(G["Brute health"], "0") || eq(G["health"], "0"))) {
        t.pointTowards("player", th);
        t.move(num(G["boss speed"]));
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss damaged" },
    fn: function* (t, th) {
      if (eq(G["boss atack"], "false")) {
        if (eq(G["kingofcuts"], "false")) {
          G["Brute health"] = num(G["Brute health"]) + -1;
        }
        t.setCostume("damaged");
        yield* rt.wait("0.2");
        t.setCostume("idle");
      }
    },
  },
  {
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      if (t.touching("bat hitbox", th)) {
        rt.broadcast("boss damaged", th);
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["Brute health"], "0")) {
          G["boss dead"] = "true";
        }
        if (t.touching("koc hitbox", th)) {
          G["Brute health"] = "0";
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      while (!(eq(G["derrubadas totais"], "100") || gt(G["derrubadas totais"], "100"))) yield WAIT;
      rt.broadcast("boss time", th);
    },
  },
  {
    hat: { k: "broadcast", name: "boss dash" },
    fn: function* (t, th) {
      t.setCostume("charge.prep");
      G["boss speed"] = "0";
      yield* rt.wait("1");
      G["boss speed"] = "0.5";
      t.setCostume("charge");
      yield* t.glideTo("0.2", "boss warning", th);
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
      t.v["spawn location"] = "4";
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
    hat: { k: "broadcast", name: "boss dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss time" },
    fn: function* (t, th) {
      while (!lt(G["Brute health"], "1")) yield WAIT;
      rt.broadcast("boss dead", th);
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss dash" },
    fn: function* (t, th) {
      yield* rt.wait("1");
      for (let n = Math.round(9); n > 0; n--) {
        rt.createClone(t);
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 70);
      yield* rt.wait("0.2");
      if (rt.deleteThisClone(t)) return;
    },
  },
];
