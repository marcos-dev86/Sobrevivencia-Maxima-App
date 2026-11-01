// GERADO por tools/transpile.mjs a partir de "boss hipnotiser" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 2, "forward");
      t.setRotationStyle("left-right");
      t.hide();
      while (!(eq(G["derrubadas totais"], "300") || gt(G["derrubadas totais"], "300"))) yield WAIT;
      rt.broadcast("boss time3", th);
    },
  },
  {
    hat: { k: "broadcast", name: "boss time3" },
    fn: function* (t, th) {
      G["hipno health"] = "10";
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
      while (!t.touching("player", th)) {
        t.pointTowards("player", th);
        t.move(num(G["boss speed"]));
        yield LOOP;
      }
      G["health"] = "0";
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
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
    hat: { k: "broadcast", name: "boss time3" },
    fn: function* (t, th) {
      while (!lt(G["hipno health"], "1")) yield WAIT;
      t.hide();
      rt.broadcast("boss dead 3", th);
      if (eq(G["bat equiped"], "true")) {
        G["derrubadas com o bastão"] = num(G["derrubadas com o bastão"]) + 1;
      } else {
        G["derrubadas com o arco"] = num(G["derrubadas com o arco"]) + 1;
      }
      G["derrubadas totais"] = num(G["derrubadas totais"]) + 1;
    },
  },
  {
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      if (t.touching("bat hitbox", th)) {
        if (eq(G["Laser On"], "true")) {
          rt.broadcast("laser cancel", th);
        }
        G["hipno health"] = num(G["hipno health"]) + -1;
        rt.broadcast("boss damaged3", th);
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
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (gt(G["boss speed"], "0")) {
          yield* rt.wait("0.6");
          t.setCostume("walk");
          yield* rt.wait("0.6");
          t.setCostume("walk2");
        } else {
          if (eq(G["Laser On"], "false")) {
            t.setCostume("idle");
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Boss attack animation start" },
    fn: function* (t, th) {
      t.setCostume("Charge1");
      yield* rt.wait("0.1");
      t.setCostume("Charge2");
      yield* rt.wait("0.1");
      t.setCostume("Charge3");
      yield* rt.wait("0.1");
      t.setCostume("Charge4");
      yield* rt.wait("0.1");
      while (!eq(G["Laser On"], "false")) {
        t.setCostume("Attack");
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "laser cancel" },
    fn: function* (t, th) {
      t.setCostume("idle");
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "boss damaged3" },
    fn: function* (t, th) {
      t.setCostume("damaged");
      yield* rt.wait("1");
      t.setCostume("idle");
    },
  },
];
