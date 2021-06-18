import React, { PureComponent } from "react";
import {
  Box,
  TNF,
  Enbrel,
  Macrophage,
  Site,
  Menu,
} from "../components/renderers";
import { GameEngine } from "react-game-engine";

const menuCheck = (entities, { input }) => {
  if (entities && entities["menu"].stage !== 1.5) {
    const { payload } = input.find((x) => x.name === "onMouseDown") || {};
    if (Object.keys(baseData).length === 0) {
      baseData = { ...entities };
    }
    if (payload) {
      //Btn 83 440, y 65 - 119
      let x = payload.pageX - 315;
      let y = payload.pageY - 150;

      if (x >= 83 && x <= 440) {
        if (y >= 65 && y <= 119) {
          if (entities.menu.stage === 1 || entities.menu.stage === 2) {
            window.location.reload();
          }
          entities = {
            gameTable: { ...entities.gameTable },
            menu: { ...entities.menu },
            prog: { ...entities.prog },
            ...startingData,
          };
          entities.gameTable.m = 1;
          entities.gameTable.t = 0;
          entities.gameTable.e = 0;
          entities.menu.renderer = null;
          entities.menu.stage = 1.5;
          entities.prog.stage = 1.5;
        }
      }
    }
  }
  return entities;
};

const addEnbrel = (entities, { input }) => {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  if (entities && entities["menu"].stage === 1.5) {
    const { payload } = input.find((x) => x.name === "onMouseDown") || {};
    //   console.log(entities);
    if (payload) {
      if (
        outBounds(
          payload.pageX - 315,
          payload.pageY - 150,
          entities.gameTable.window
        )
      )
        return entities;
      entities["Enb" + entities.gameTable.e] = {
        x: payload.pageX - 315,
        y: payload.pageY,
        size: 20,
        colour: "green",
        type: "E",
        id: "Enb" + entities.gameTable.e,
        renderer: <Enbrel />,
      };
      entities.gameTable.e += 1;
    }
  }

  return entities;
};
const UpdateEntities = (entities, { input, running }) => {
  if (entities && entities["menu"].stage === 1.5) {
    if (entities.prog.count + 1 < entities.prog.maxCount)
      entities.prog.count += 1;
    else {
      let tempData = {
        gameTable: { ...entities.gameTable },
        menu: { ...entities.menu },
        prog: { ...entities.prog },
      };
      tempData.menu.stage = 2;
      tempData.prog.stage = 2;
      tempData.menu.renderer = <Menu />;
      entities = { ...tempData };
    }
    for (let x = 0; x < Object.keys(entities).length; x++) {
      if (entities[Object.keys(entities)[x]].type === "M") {
        let macroPhage = entities[Object.keys(entities)[x]];
        let xDif = macroPhage.x - entities.i1.x;
        let yDif = macroPhage.y - entities.i1.y;
        let distInflammation = Math.sqrt(xDif * xDif + yDif * yDif);

        if (macroPhage.cdTimer > 0) {
          macroPhage.cdTimer -= 1;
        } else if (distInflammation > 1.1 * entities.i1.size) {
          console.log("Producing TNF");
          macroPhage.cdTimer = macroPhage.defaultTimer;
          let newTNF = {
            x: macroPhage.x,
            y: macroPhage.y,
            macroId: macroPhage.id,
            spd: 2,
            spdInc: 0.5,
            colour: "green",
            deActiveColour: "yellow",
            activeColour: "red",
            size: 25,
            shrinkage: 0.01,
            isBlocked: false,
            isAttached: false,
            goal: { currentTarget: { x: macroPhage.x, y: macroPhage.y } },
            type: "T",
            id: "TNF" + entities.gameTable.t,
            renderer: <TNF />,
          };
          entities[newTNF.id] = { ...newTNF };
          entities.gameTable.t += 1;
        }
        //check if in range

        if (!macroPhage.goal.targetLocked) {
          let xDif = macroPhage.x - entities.i1.x;
          let yDif = macroPhage.y - entities.i1.y;
          let distInflammation = Math.sqrt(xDif * xDif + yDif * yDif);
          // console.log(distInflammation);

          if (distInflammation < 1.1 * entities.i1.size) {
            macroPhage.goal.currentTarget.x = macroPhage.x;
            macroPhage.goal.currentTarget.y = macroPhage.y;
          }

          xDif = macroPhage.x - macroPhage.goal.currentTarget.x;
          yDif = macroPhage.y - macroPhage.goal.currentTarget.y;
          let dist = Math.sqrt(xDif * xDif + yDif * yDif);
          if (dist <= macroPhage.size) {
            macroPhage.goal.currentTarget.x = getRandomArbitrary(
              macroPhage.size,
              entities.gameTable.window.width
            );
            macroPhage.goal.currentTarget.y = getRandomArbitrary(
              macroPhage.size * 2,
              entities.gameTable.window.height + 150
            );
          }

          macroPhage.x =
            xDif > 0
              ? macroPhage.x - macroPhage.spd
              : macroPhage.x + macroPhage.spd;
          macroPhage.y =
            yDif > 0
              ? macroPhage.y - macroPhage.spd
              : macroPhage.y + macroPhage.spd;
        } else {
          let xDif = macroPhage.x - macroPhage.goal.currentTarget.x;
          let yDif = macroPhage.y - macroPhage.goal.currentTarget.y;
          let dist = Math.sqrt(xDif * xDif + yDif * yDif);
          if (dist <= 1.1 * entities.i1.size) {
            if (!macroPhage.goal.reached) {
              entities.i1.spd += macroPhage.inflameIncrease;
            }
            macroPhage.goal.reached = true;
            continue;
          }

          macroPhage.x =
            xDif > 0
              ? macroPhage.x - macroPhage.spd
              : macroPhage.x + macroPhage.spd;
          macroPhage.y =
            yDif > 0
              ? macroPhage.y - macroPhage.spd
              : macroPhage.y + macroPhage.spd;
        }
      } else if (entities[Object.keys(entities)[x]].type === "T") {
        let TNF = entities[Object.keys(entities)[x]];
        TNF.size -= TNF.shrinkage;
        if (TNF.size <= 0) {
          delete entities[TNF.id];
        } else {
          let xDif = TNF.x - entities.i1.x;
          let yDif = TNF.y - entities.i1.y;
          let distInflammation = Math.sqrt(xDif * xDif + yDif * yDif);
          if (!TNF.isBlocked && distInflammation <= entities.i1.size * 1.1) {
            entities.i1.tnf += 1;
            entities[TNF.macroId].goal.targetLocked = true;
            entities[TNF.macroId].goal.currentTarget.x = entities.i1.x;
            entities[TNF.macroId].goal.currentTarget.y = entities.i1.y;

            if (entities[TNF.macroId].spd * 2 < entities[TNF.macroId].maxSpd)
              entities[TNF.macroId].spd *= 2;

            // if (
            //   entities[TNF.macroId].spd + TNF.spdInc <
            //   entities[TNF.macroId].maxSpd
            // )
            //   entities[TNF.macroId].spd += TNF.spdInc;
            delete entities[TNF.id];
          }

          xDif = TNF.x - TNF.goal.currentTarget.x;
          yDif = TNF.y - TNF.goal.currentTarget.y;
          let dist = Math.sqrt(xDif * xDif + yDif * yDif);
          //check if in range
          if (dist <= TNF.size) {
            TNF.goal.currentTarget.x = getRandomArbitrary(
              TNF.size,
              entities.gameTable.window.width
            );
            TNF.goal.currentTarget.y = getRandomArbitrary(
              TNF.size * 2,
              entities.gameTable.window.height + 150
            );
          }

          TNF.x = xDif > 0 ? TNF.x - TNF.spd : TNF.x + TNF.spd;
          TNF.y = yDif > 0 ? TNF.y - TNF.spd : TNF.y + TNF.spd;
        }
      } else if (entities[Object.keys(entities)[x]].type === "I") {
        let site = entities[Object.keys(entities)[x]];
        if (site.popped && !site.hasPopped && site.fireTimer >= 0) {
          site.fireTimer -= 2;
        } else if (site.popped) {
          site.hasPopped = true;
          let tempData = {
            gameTable: { ...entities.gameTable },
            menu: { ...entities.menu },
            prog: { ...entities.prog },
          };
          tempData.menu.stage = 1;
          tempData.prog.stage = 2;
          tempData.menu.renderer = <Menu />;
          entities = { ...tempData };
        }

        if (site.size + site.spd < site.sizeBound[1]) site.size += site.spd;
        else site.popped = true;
      } else if (entities[Object.keys(entities)[x]].type === "E") {
        let enbrel = entities[Object.keys(entities)[x]];

        for (let i = 0; i < Object.keys(entities).length; i++) {
          if (entities[Object.keys(entities)[i]].type === "T") {
            let TNF = entities[Object.keys(entities)[i]];
            if (!TNF.isBlocked) {
              let xDif = enbrel.x - TNF.x;
              let yDif = enbrel.y - TNF.y;
              let dist = Math.sqrt(xDif * xDif + yDif * yDif);
              if (dist < enbrel.size * 1.3) {
                TNF.isBlocked = true;
                delete entities[enbrel.id];
              }
            }
          }
        }
      }
    }
  }
  return entities;
};

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function outBounds(x, y, window) {
  return x < 0 || y < 0 || x > window.width || y > window.height;
}
let baseData = {};
let startingData = {
  m1: {
    x: 150,
    y: 500,
    spd: 0.015,
    maxSpd: 2,
    inflameIncrease: 0.02,
    size: 75,
    cdTimer: 200,
    defaultTimer: 200,
    goal: {
      targetLocked: false,
      currentTarget: { x: 150, y: 700 },
      reached: false,
    },
    type: "M",
    id: "m1",
    renderer: <Macrophage />,
  },
  m2: {
    x: 250,
    y: 200,
    spd: 0.015,
    maxSpd: 2,
    inflameIncrease: 0.02,
    size: 75,
    cdTimer: 200,
    defaultTimer: 200,
    goal: {
      targetLocked: false,
      currentTarget: { x: 300, y: 600 },
      reached: false,
    },
    type: "M",
    id: "m2",
    renderer: <Macrophage />,
  },
  i1: {
    x: getRandomArbitrary(400, 800),
    y: getRandomArbitrary(180, 600),
    spd: 0.001,
    tnf: 0,
    fireTimer: 800,
    sizeBound: [80, 100],
    hasPopped: false,
    colour: "#D21494",
    size: 75,
    type: "I",
    id: "i1",
    popped: false,
    renderer: <Site />,
  },
};

export { addEnbrel, UpdateEntities, menuCheck };
