// GERADO por tools/transpile.mjs a partir de "bow" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.v["IM CLONE!"] = "false";
      t.setCostume("idle");
      rt.goToLayer(t, "back");
      rt.goLayers(t, 8, "forward");
      t.hide();
      for (;;) {
        t.pointTowards("mouse click", th);
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        t.goTo("player", th);
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      if (eq(t.v["IM CLONE!"], "false")) {
        if (eq(G["md bow"], "false")) {
          t.setCostume("charge");
          yield* rt.wait((num(G["shoot speed"]) / 2));
          t.setCostume("charge 2");
          yield* rt.wait((num(G["shoot speed"]) / 2));
          t.setCostume("shoot");
          yield* rt.wait((num(G["shoot speed"]) / 4));
          t.setCostume("idle");
        } else {
          t.setCostume("charge.mb");
          yield* rt.wait((num(G["shoot speed"]) / 2));
          t.setCostume("charge2.mb");
          yield* rt.wait((num(G["shoot speed"]) / 2));
          t.setCostume("shoot.mb");
          yield* rt.wait((num(G["shoot speed"]) / 4));
          t.setCostume("Idle.mb");
        }
      }
    },
  },
  {
    hat: { k: "broadcast", name: "mobile mode" },
    fn: function* (t, th) {
      rt.stopOtherScripts(t, th);
      t.setXY(0, 0);
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (rt.keyDown("1")) {
          t.hide();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "equip bow" },
    fn: function* (t, th) {
      if ((eq(G["kingofcuts"], "false") || eq(G["batonly"], "false"))) {
        t.show();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "equip sword" },
    fn: function* (t, th) {
      t.hide();
      G["bat equiped"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "attack" },
    fn: function* (t, th) {
      yield* rt.wait(G["shoot speed"]);
      if (eq(G["bat equiped"], "false")) {
        rt.createClone(t);
      }
      rt.broadcast("shoot", th);
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      G["shoot speed"] = "0.40";
      for (;;) {
        t.setVolume(100);
        if (eq(G["kingofcuts"], "true")) {
          t.hide();
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("zombie2", th)) {
          rt.broadcast("+1 alma", th);
          rt.broadcast("z dead2", th);
          rt.broadcast("respawn z2", th);
          t.playSound("acerta os bixo kkk");
          G["derrubadas com o arco"] = num(G["derrubadas com o arco"]) + 1;
          G["derrubadas totais"] = num(G["derrubadas totais"]) + 1;
          if (rt.deleteThisClone(t)) return;
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("zombie", th)) {
          rt.broadcast("+1 alma", th);
          rt.broadcast("z dead1", th);
          rt.broadcast("respawn z", th);
          t.playSound("acerta os bixo kkk");
          G["derrubadas com o arco"] = num(G["derrubadas com o arco"]) + 1;
          G["derrubadas totais"] = num(G["derrubadas totais"]) + 1;
          if (rt.deleteThisClone(t)) return;
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      t.v["IM CLONE!"] = "true";
      t.playSound("saindo do arco");
      for (;;) {
        if (eq(G["md bow"], "false")) {
          t.setCostume("arrow");
          t.move(20);
        } else {
          t.setCostume("metal.arrow");
          t.move(20);
        }
        if (eq(G["md bow"], "false")) {
          if ((t.touching("shield2", th) || (t.touching("shield", th) || t.touching("shield3", th)))) {
            t.playSound("acertando o nada kkk");
            if (rt.deleteThisClone(t)) return;
          }
        }
        if (eq(G["z speed"], "0")) {
          if (rt.deleteThisClone(t)) return;
        }
        if (t.touching("_edge_", th)) {
          t.playSound("acertando o nada kkk");
          if (rt.deleteThisClone(t)) return;
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "move now" },
    fn: function* (t, th) {
      if (eq(t.v["IM CLONE!"], "false")) {
        t.setDirection(num(G["direction to move"]));
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("zombie3", th)) {
          rt.broadcast("+1 alma", th);
          rt.broadcast("z dead3", th);
          rt.broadcast("respawn z3", th);
          t.playSound("acerta os bixo kkk");
          G["derrubadas com o arco"] = num(G["derrubadas com o arco"]) + 1;
          G["derrubadas totais"] = num(G["derrubadas totais"]) + 1;
          if (rt.deleteThisClone(t)) return;
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("boss brute", th)) {
          rt.broadcast("boss damaged", th);
          t.playSound("acerta os bixo kkk");
          if (rt.deleteThisClone(t)) return;
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
          if ((eq(G["kingofcuts"], "true") || eq(G["batonly"], "true"))) {
            t.hide();
            rt.broadcast("equip sword", th);
          } else {
            t.show();
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("fire ring", th)) {
          t.playSound("acertando fogo kkk");
          if (rt.deleteThisClone(t)) return;
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("boss trans", th)) {
          rt.broadcast("boss damaged2", th);
          t.playSound("acerta os bixo kkk");
          if (rt.deleteThisClone(t)) return;
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("fire ring", th)) {
          if (rt.deleteThisClone(t)) return;
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
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(G["md bow"], "false")) {
          if (t.touching("zombie knight", th)) {
            t.playSound("acertando o nada kkk");
            if (rt.deleteThisClone(t)) return;
          }
        } else {
          if (t.touching("zombie knight", th)) {
            t.playSound("acerta os bixo kkk");
            G["z armor hp"] = num(G["z armor hp"]) + -1;
            rt.broadcast("z armor damaged", th);
            if (rt.deleteThisClone(t)) return;
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "bought" },
    fn: function* (t, th) {
      if (eq(G["md bow"], "true")) {
        t.setCostume("Idle.mb");
      }
    },
  },
  {
    hat: { k: "clone" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("boss hipnotiser", th)) {
          if (eq(G["Laser On"], "true")) {
            rt.broadcast("laser cancel", th);
          }
          rt.broadcast("boss damaged3", th);
          G["hipno health"] = num(G["hipno health"]) + -1;
          t.playSound("acerta os bixo kkk");
          if (rt.deleteThisClone(t)) return;
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
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      if (eq(G["bat equiped"], "false")) {
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
