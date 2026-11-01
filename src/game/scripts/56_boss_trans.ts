// GERADO por tools/transpile.mjs a partir de "boss trans" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 1, "forward");
      t.setRotationStyle("left-right");
      t.hide();
      while (!(eq(G["derrubadas totais"], "200") || gt(G["derrubadas totais"], "200"))) yield WAIT;
      rt.broadcast("boss time2", th);
    },
  },
  {
    hat: { k: "broadcast", name: "boss time2" },
    fn: function* (t, th) {
      G["transfigured health"] = "10";
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
      while (!(eq(G["health"], "0") || eq(G["transfigured health"], "0"))) {
        if (eq(G["boss atack"], "false")) {
          t.pointTowards("player", th);
          t.move(num(G["boss speed"]));
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss spikes" },
    fn: function* (t, th) {
      G["boss speed"] = "0";
      t.setCostume("power");
      while (!eq(G["boss atack"], "false")) yield WAIT;
      yield* rt.wait("1.4");
      t.setCostume("idle");
      G["boss speed"] = "0.5";
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (gt(G["boss speed"], "0")) {
          yield* rt.wait("0.6");
          if (eq(G["boss atack"], "false")) {
            t.setCostume("walk1");
          }
          yield* rt.wait("0.6");
          if (eq(G["boss atack"], "false")) {
            t.setCostume("walk2");
          }
          yield* rt.wait("0.6");
          if (eq(G["boss atack"], "false")) {
            t.setCostume("walk3");
          }
          yield* rt.wait("0.6");
          if (eq(G["boss atack"], "false")) {
            t.setCostume("walk4");
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
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss damaged2" },
    fn: function* (t, th) {
      t.setCostume("damaged");
      yield* rt.wait("0.1");
      t.setCostume("idle");
      G["transfigured health"] = num(G["transfigured health"]) + -1;
    },
  },
  {
    hat: { k: "broadcast", name: "koc attack" },
    fn: function* (t, th) {
      if (t.touching("koc hitbox", th)) {
        G["transfigured health"] = "0";
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss time2" },
    fn: function* (t, th) {
      while (!lt(G["transfigured health"], "1")) yield WAIT;
      t.hide();
      rt.broadcast("boss dead2", th);
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
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      if ((t.touching("bat hitbox", th) && eq(G["fire ring off"], "true"))) {
        rt.broadcast("boss damaged2", th);
      }
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
];
