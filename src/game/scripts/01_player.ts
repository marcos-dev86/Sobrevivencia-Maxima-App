// GERADO por tools/transpile.mjs a partir de "player" — não edite à mão.
// Para ajustes de jogo use src/game/config.ts e src/game/world.ts.
/* eslint-disable */
import { rt, G, num, bool, eq, gt, lt, rand, join, letterOf, LOOP, WAIT, type ScriptDef, type Target, type Thread } from '../../engine/api';

export const scripts: ScriptDef[] = [
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (eq(t.v["taking damage"], "false")) {
          if (eq(G["dashing"], "false")) {
            if ((rt.keyDown("w") || (rt.keyDown("a") || (rt.keyDown("s") || (rt.keyDown("d") || (rt.keyDown("up arrow") || (rt.keyDown("down arrow") || (rt.keyDown("right arrow") || (rt.keyDown("left arrow") || eq(t.v["moving"], "true")))))))))) {
              if (eq(G["selected skin"], "old jack")) {
                t.setCostume("walk old jack");
                yield* rt.wait("0.3");
                t.setCostume("walk old jack2");
                yield* rt.wait("0.3");
              } else {
                t.setCostume("walk 1");
                yield* rt.wait("0.2");
                t.setCostume("walk 2");
                yield* rt.wait("0.2");
              }
            } else {
              if (eq(G["selected skin"], "old jack")) {
                t.setRotationStyle("don't rotate");
                t.setCostume("idle old jack");
              } else {
                t.setRotationStyle("left-right");
                t.setCostume("idle");
              }
            }
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      for (;;) {
        if (t.touching("hipno laser", th)) {
          t.pointTowards("boss hipnotiser", th);
          t.move(0.5);
        } else {
          if ((rt.keyDown("a") || rt.keyDown("left arrow"))) {
            t.changeX((num(G["walkspeed"]) - (num(G["walkspeed"]) * 2)));
          }
          if ((rt.keyDown("s") || rt.keyDown("down arrow"))) {
            t.changeY((num(G["walkspeed"]) - (num(G["walkspeed"]) * 2)));
          }
          if ((rt.keyDown("w") || rt.keyDown("up arrow"))) {
            t.changeY(num(G["walkspeed"]));
          }
          if ((rt.keyDown("d") || rt.keyDown("right arrow"))) {
            t.changeX(num(G["walkspeed"]));
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "flag" },
    fn: function* (t, th) {
      rt.goToLayer(t, "back");
      rt.goLayers(t, 8, "forward");
      t.setRotationStyle("left-right");
      t.v["moving"] = "false";
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.v["taking damage"] = "false";
      t.v["moving"] = "false";
      t.setXY(0, 0);
      t.clearEffects();
      t.show();
      for (;;) {
        if (lt(G["health"], "1")) {
          rt.broadcast("dead", th);
        }
        if (!rt.mouseDown(th)) {
          t.v["moving"] = "false";
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dead" },
    fn: function* (t, th) {
      rt.stopOtherScripts(t, th);
      rt.audio.stopAll();
      if (eq(G["selected skin"], "old jack")) {
        t.setCostume("dead old jack");
      } else {
        if (eq(G["bleeding"], "false")) {
          if (eq(G["on fire"], "false")) {
            t.setCostume("dead");
            yield* rt.wait("2.3");
            t.setCostume("dead2");
            yield* rt.wait("0.4");
            t.setCostume("dead3");
            yield* rt.wait("0.1");
            t.setCostume("dead4");
            yield* rt.wait("3");
            t.setCostume("dead5");
            yield* rt.wait("2");
            t.clearEffects();
            for (let n = Math.round(18); n > 0; n--) {
              t.changeEffect("GHOST", 5);
              yield LOOP;
            }
            t.setCostume("dead end normal");
            t.clearEffects();
          } else {
            t.setCostume("dead end fire1");
            yield* rt.wait("0.5");
            t.setCostume("dead end fire2");
            yield* rt.wait("0.3");
            t.setCostume("dead end fire 3");
            yield* rt.wait("0.1");
            t.setCostume("dead end fire 4");
            yield* rt.wait("0.1");
            t.setCostume("dead end fire 5");
            t.clearEffects();
            for (let n = Math.round(18); n > 0; n--) {
              t.changeEffect("GHOST", 5);
              yield LOOP;
            }
            t.setCostume("dead end fire final");
            t.clearEffects();
          }
        } else {
          t.setCostume("dead");
          yield* rt.wait("2.3");
          t.setCostume("dead2");
          yield* rt.wait("0.7");
          t.setCostume("dead end bleed1");
          yield* rt.wait("0.1");
          t.setCostume("dead end bleed2");
          yield* rt.wait("0.1");
          t.setCostume("dead end bleed3");
          t.clearEffects();
          for (let n = Math.round(18); n > 0; n--) {
            t.changeEffect("GHOST", 5);
            yield LOOP;
          }
          t.setCostume("dead end bleed final");
          t.clearEffects();
        }
      }
    },
  },
  {
    hat: { k: "key", key: "e" },
    fn: function* (t, th) {
      if (eq(G["Soul Dash"], "false")) {
        rt.broadcast("dash", th);
        G["dashing"] = "true";
        if (eq(G["selected skin"], "old jack")) {
          t.setCostume("idle old jack");
        } else {
          t.setCostume("dash");
        }
        t.playSound("dash");
        for (let n = Math.round(6); n > 0; n--) {
          t.move((num(G["dash distance"]) / 2));
          if (eq(G["selected skin"], "old jack")) {
            t.setCostume("idle old jack");
          } else {
            t.setCostume("idle");
          }
          yield LOOP;
        }
        G["dashing"] = "false";
        yield* rt.wait("3");
      }
    },
  },
  {
    hat: { k: "broadcast", name: "dash" },
    fn: function* (t, th) {
      G["dashing"] = "true";
      if (eq(G["Soul Dash"], "false")) {
        t.setDirection(num(G["direction to move"]));
        if (eq(G["selected skin"], "old jack")) {
          t.setCostume("idle old jack");
        } else {
          t.setCostume("dash");
        }
        t.playSound("dash");
        for (let n = Math.round(6); n > 0; n--) {
          t.move((num(G["dash distance"]) / 2));
          yield LOOP;
        }
        if (eq(G["selected skin"], "old jack")) {
          t.setCostume("idle old jack");
        } else {
          t.setCostume("idle");
        }
        G["dashing"] = "false";
      } else {
        t.setCostume("Soul Dash");
        t.playSound("dash");
        for (let n = Math.round(6); n > 0; n--) {
          t.move((num(G["dash distance"]) / 2));
          yield LOOP;
        }
        if (eq(G["selected skin"], "old jack")) {
          t.setCostume("idle old jack");
        } else {
          t.setCostume("idle");
        }
        G["dashing"] = "false";
      }
    },
  },
  {
    hat: { k: "broadcast", name: "move now" },
    fn: function* (t, th) {
      if (!t.touching("hipno laser", th)) {
        t.setDirection(num(G["direction to move"]));
        t.move(num(G["walkspeed"]));
        t.v["moving"] = "true";
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      G["dashing"] = "false";
      for (;;) {
        if (t.touching("boss trans", th)) {
          t.v["taking damage"] = "true";
          G["health"] = num(G["health"]) + -25;
          rt.broadcast("on fire start", th);
          G["fire time"] = "5";
          rt.broadcast("p damaged", th);
          t.move(-100);
          t.v["taking damage"] = "false";
        }
        if (t.touching("boss brute", th)) {
          if (eq(G["boss atack"], "false")) {
            G["health"] = "0";
          } else {
            G["health"] = num(G["health"]) + -40;
            rt.broadcast("bleeding start", th);
            G["bleed time"] = "5";
            rt.broadcast("p damaged", th);
            t.move(-100);
          }
        }
        if (eq(G["store open"], "true")) {
          t.v["player x"] = t.xPos;
          G["player y"] = t.yPos;
          while (!gt(G["z speed"], "0")) {
            t.setX(num(t.v["player x"]));
            t.setY(num(G["player y"]));
            if (eq(G["selected skin"], "old jack")) {
              t.setCostume("idle old jack");
            } else {
              t.setCostume("idle");
            }
            yield LOOP;
          }
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "Start" },
    fn: function* (t, th) {
      t.clearEffects();
      for (;;) {
        t.ifOnEdgeBounce();
        if ((t.touching("zombie", th) || (t.touching("zombie2", th) || (t.touching("zombie3", th) || t.touching("zombie knight", th))))) {
          if (!lt(G["health"], "1")) {
            t.v["taking damage"] = "true";
            yield* rt.wait("0.5");
            t.v["taking damage"] = "false";
          }
        }
        yield LOOP;
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
      for (;;) {
        if (eq(G["mobile mode"], "false")) {
          t.pointTowards("mouse click", th);
        }
        if (t.touching("fire", th)) {
          rt.broadcast("on fire start", th);
          G["fire time"] = "4";
        }
        yield LOOP;
      }
    },
  },
  {
    hat: { k: "broadcast", name: "p damaged" },
    fn: function* (t, th) {
      if (gt(G["health"], "0")) {
        t.playSound("damaged");
        if (eq(G["selected skin"], "old jack")) {
          t.setCostume("damaged old jack");
        } else {
          t.setCostume("hurt");
        }
      }
    },
  },
  {
    hat: { k: "key", key: "e" },
    fn: function* (t, th) {
      t.v["last walkspeed"] = G["walkspeed"];
      if ((eq(G["Soul Dash"], "true") && gt(G["dash energy"], "1"))) {
        while (!(!rt.keyDown("e") || eq(G["dash energy"], "0"))) {
          G["dashing"] = "true";
          rt.broadcast("dash", th);
          G["walkspeed"] = "15";
          yield LOOP;
        }
        G["dashing"] = "false";
        G["walkspeed"] = t.v["last walkspeed"];
      }
    },
  },
  {
    hat: { k: "broadcast", name: "pause" },
    fn: function* (t, th) {
      t.hide();
    },
  },
  {
    hat: { k: "broadcast", name: "pause off" },
    fn: function* (t, th) {
      t.show();
    },
  },
];
