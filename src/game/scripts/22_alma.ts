// GERADO por tools/transpile.mjs a partir de "+alma" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "+1 alma" },
    fn: function* (t, th) {
      G["Almas"] = num(G["Almas"]) + 1;
      t.setEffect("GHOST", 0);
      t.setCostume("+1 Alma");
      t.setXY(rand("-97", "117"), rand("88", "-104"));
      t.show();
      t.setEffect("FISHEYE", 50);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 25);
      t.setEffect("COLOR", 0);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 10);
      t.changeEffect("GHOST", 25);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 25);
      t.setEffect("FISHEYE", -10);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 20);
      t.hide();
      return;
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "+2 almass" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 0);
      G["Almas"] = num(G["Almas"]) + 2;
      t.setCostume("+2 almas");
      t.setXY(rand("-97", "117"), rand("88", "-104"));
      t.show();
      t.setEffect("FISHEYE", 50);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 25);
      t.setEffect("GHOST", 0);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 10);
      t.changeEffect("GHOST", 25);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 25);
      t.setEffect("FISHEYE", -10);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 20);
      t.hide();
      t.setEffect("GHOST", 0);
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 0);
      G["Almas"] = num(G["Almas"]) + 5;
      t.setCostume("+5 almas");
      t.setXY(rand("-97", "117"), rand("88", "-104"));
      t.show();
      t.setEffect("FISHEYE", 50);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 25);
      t.setEffect("COLOR", 0);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 10);
      t.changeEffect("GHOST", 25);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 25);
      t.setEffect("FISHEYE", -10);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 20);
      t.hide();
      return;
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead2" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 0);
      G["Almas"] = num(G["Almas"]) + 8;
      t.setCostume("8 Almas");
      t.setXY(rand("-97", "117"), rand("88", "-104"));
      t.show();
      t.setEffect("FISHEYE", 50);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 25);
      t.setEffect("COLOR", 0);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 10);
      t.changeEffect("GHOST", 25);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 25);
      t.setEffect("FISHEYE", -10);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 20);
      t.hide();
      return;
    },
  },
  {
    hat: { k: "broadcast", name: "boss dead 3" },
    fn: function* (t, th) {
      t.setEffect("GHOST", 0);
      G["Almas"] = num(G["Almas"]) + 8;
      t.setCostume("8 Almas");
      t.setXY(rand("-97", "117"), rand("88", "-104"));
      t.show();
      t.setEffect("FISHEYE", 50);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 25);
      t.setEffect("COLOR", 0);
      yield* rt.wait("0.1");
      t.setEffect("FISHEYE", 10);
      t.changeEffect("GHOST", 25);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 25);
      t.setEffect("FISHEYE", -10);
      yield* rt.wait("0.1");
      t.changeEffect("GHOST", 20);
      t.hide();
      return;
    },
  },
];
