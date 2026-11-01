// GERADO por tools/transpile.mjs a partir de "codes button" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.hide();
      t.v["asnwer"] = "";
      G["batonly"] = "false";
      G["kingofcuts"] = "false";
      t.setXY(50, -100);
      for (;;) {
        if (t.touching("_mouse_", th)) {
          yield* t.sayFor("Um código usado só funciona em 1 partida, você deve re-escrever o código se quiser continuar usando-o.", "0.01");
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (lt(t.sizeRounded, "85")) {
          t.setSize(t.size + 5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (gt(t.sizeRounded, "90")) {
          t.setSize(t.size + -5);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "click" },
    fn: function* (t, th) {
      yield* rt.ask("");
      t.v["asnwer"] = rt.answer;
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
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(t.v["asnwer"], "BatOnly")) {
          G["batonly"] = "true";
          rt.broadcast("code yes", th);
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "X info" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "info" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      while (!eq(G["kingofcuts"], "true")) {
        if (eq(t.v["asnwer"], "kingofcuts")) {
          if (eq(G["mobile mode"], "false")) {
            G["kingofcuts"] = "true";
            rt.broadcast("code yes", th);
          } else {
            rt.broadcast("code not on mobile", th);
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "go to menu" },
    fn: function* (t, th) {
      t.show();
    },
  },
  {
    hat: { k: "broadcast", name: "back to menu" },
    fn: function* (t, th) {
      t.v["asnwer"] = "";
      t.show();
      G["batonly"] = "false";
      G["kingofcuts"] = "false";
      G["NoCooldown"] = "false";
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(t.v["asnwer"], "NoCooldown")) {
          if (eq(G["NoCooldown"], "false")) {
            rt.broadcast("code yes", th);
          }
          G["NoCooldown"] = "true";
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "go to achievments" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "transition" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "stop" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "skins page" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(t.v["asnwer"], "InfSouls")) {
          rt.broadcast("code yes", th);
          while (!eq(G["in-game"], "false")) {
            G["Almas"] = "9999";
            yield LOOP;
          }
        }
        yield LOOP;
      }
    },
  },
];
