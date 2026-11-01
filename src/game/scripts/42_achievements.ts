// GERADO por tools/transpile.mjs a partir de "achievements" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "fully maxed" },
    fn: function* (t, th) {
      t.setCostume("All upg");
      t.playSound("Conquista");
      t.setXY(18, 230);
      t.show();
      yield* t.glide("0.3", 18, 150);
      yield* rt.wait("3");
      yield* t.glide("0.3", 18, 230);
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.setXY(18, 230);
      t.hide();
      t.v["All powers"] = "false";
      t.v["first knight kill"] = "false";
      t.v["davidegoliath"] = "false";
      t.v["oneofus"] = "false";
      t.v["rich"] = "false";
      t.v["bow"] = "false";
      t.v["sword"] = "false";
      t.v["maxed"] = "false";
      t.v["m shadow"] = "false";
      while (!(eq(t.v["sword"], "true") && (eq(t.v["bow"], "true") && (eq(t.v["maxed"], "true") && (eq(t.v["rich"], "true") && (eq(t.v["davidegoliath"], "true") && (eq(t.v["oneofus"], "true") && (eq(t.v["m shadow"], "true") && (eq(t.v["first knight kill"], "true") && eq(t.v["All powers"], "true")))))))))) yield WAIT;
      rt.broadcast("Platinou", th);
    },
  },
  {
    hat: { k: "broadcast", name: "100sk" },
    fn: function* (t, th) {
      t.setCostume("sword only");
      t.playSound("Conquista");
      t.setXY(18, 230);
      t.show();
      yield* t.glide("0.3", 18, 150);
      yield* rt.wait("3");
      yield* t.glide("0.3", 18, 230);
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      while (!eq(G["derrubadas com o bastão"], "100")) yield WAIT;
      rt.broadcast("100sk", th);
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      while (!eq(G["derrubadas com o arco"], "100")) yield WAIT;
      rt.broadcast("Bow player", th);
    },
  },
  {
    hat: { k: "broadcast", name: "Bow player" },
    fn: function* (t, th) {
      t.setCostume("bow player");
      t.playSound("Conquista");
      t.setXY(18, 230);
      t.show();
      yield* t.glide("0.3", 18, 150);
      yield* rt.wait("3");
      yield* t.glide("0.3", 18, 230);
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Bow player" },
    fn: function* (t, th) {
      yield* rt.wait("4");
      t.v["bow"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "100sk" },
    fn: function* (t, th) {
      yield* rt.wait("4");
      t.v["sword"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "fully maxed" },
    fn: function* (t, th) {
      yield* rt.wait("4");
      t.v["maxed"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "Platinou" },
    fn: function* (t, th) {
      t.setCostume("A PLATINA");
      t.playSound("PLATINA");
      t.setXY(18, 230);
      t.show();
      yield* t.glide("0.3", 18, 150);
      yield* rt.wait("3");
      yield* t.glide("0.3", 18, 230);
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "rich" },
    fn: function* (t, th) {
      t.setCostume("rich boi");
      t.playSound("Conquista");
      t.setXY(18, 230);
      t.show();
      yield* t.glide("0.3", 18, 150);
      yield* rt.wait("3");
      yield* t.glide("0.3", 18, 230);
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      while (!gt(G["Almas"], "99")) yield WAIT;
      rt.broadcast("rich", th);
    },
  },
  {
    hat: { k: "broadcast", name: "rich" },
    fn: function* (t, th) {
      yield* rt.wait("4");
      t.v["rich"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead" },
    fn: function* (t, th) {
      if (!eq(t.v["davidegoliath"], "true")) {
        t.setCostume("davi golias");
        t.playSound("Conquista");
        t.setXY(18, 230);
        t.show();
        yield* t.glide("0.3", 18, 150);
        yield* rt.wait("3");
        yield* t.glide("0.3", 18, 230);
        t.hide();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead" },
    fn: function* (t, th) {
      yield* rt.wait("4");
      t.v["davidegoliath"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead2" },
    fn: function* (t, th) {
      if (!eq(t.v["oneofus"], "true")) {
        t.setCostume("Quase um de nós");
        t.playSound("Conquista");
        t.setXY(18, 230);
        t.show();
        yield* t.glide("0.3", 18, 150);
        yield* rt.wait("3");
        yield* t.glide("0.3", 18, 230);
        t.hide();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead2" },
    fn: function* (t, th) {
      yield* rt.wait("4");
      t.v["oneofus"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead 3" },
    fn: function* (t, th) {
      yield* rt.wait("4");
      t.v["m shadow"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead 3" },
    fn: function* (t, th) {
      if (!eq(t.v["m shadow"], "true")) {
        t.setCostume("sereia sombra");
        t.playSound("Conquista");
        t.setXY(18, 230);
        t.show();
        yield* t.glide("0.3", 18, 150);
        yield* rt.wait("3");
        yield* t.glide("0.3", 18, 230);
        t.hide();
      }
    },
  },
  {
    hat: { k: "broadcast", name: "z armor dead" },
    fn: function* (t, th) {
      if (eq(t.v["first knight kill"], "false")) {
        rt.broadcast("first knight kill", th);
      }
      yield* rt.wait("4");
      t.v["first knight kill"] = "true";
    },
  },
  {
    hat: { k: "broadcast", name: "first knight kill" },
    fn: function* (t, th) {
      t.setCostume("knight kill N1");
      t.playSound("Conquista");
      t.setXY(18, 230);
      t.show();
      yield* t.glide("0.3", 18, 150);
      yield* rt.wait("3");
      yield* t.glide("0.3", 18, 230);
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "All powerfull" },
    fn: function* (t, th) {
      yield* rt.wait("4");
      t.v["All powers"] = "true";
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      while (!((eq(G["Big Hammer"], "true") && eq(G["cur-ava"], "true")) && (eq(G["md bow"], "true") && eq(G["Soul Dash"], "true")))) yield WAIT;
      rt.broadcast("All powerfull", th);
    },
  },
  {
    hat: { k: "broadcast", name: "All powerfull" },
    fn: function* (t, th) {
      t.setCostume("Verdadeiramente poderoso");
      t.playSound("Conquista");
      t.setXY(18, 230);
      t.show();
      yield* t.glide("0.3", 18, 150);
      yield* rt.wait("3");
      yield* t.glide("0.3", 18, 230);
      t.hide();
    },
  },
];
