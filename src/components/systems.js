import React, { PureComponent } from "react";
import { Box, TNF } from "../components/renderers";

const MoveBox = (entities, { input }) => {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.

  const { payload } = input.find((x) => x.name === "onMouseDown") || {};
  if (payload) {
    const box1 = entities[Object.keys(entities)[0]];
    if (outBounds(payload.pageX - 315, payload.pageY - 150, box1.window))
      return entities;
    entities["box" + Object.keys(entities)] = {
      x: payload.pageX - 315,
      y: payload.pageY,
      window: window,
      renderer: <Box />,
    };

    // box1.x = payload.pageX - 315;
    // box1.y = payload.pageY;
    // console.log(payload.pageX - 315);
    // console.log(payload.pageY);
  }

  return entities;
};
const MoveMacro = (entities, { input }) => {
  //-- I'm choosing to update the game state (entities) directly for the sake of brevity and simplicity.
  //-- There's nothing stopping you from treating the game state as immutable and returning a copy..
  //-- Example: return { ...entities, t.id: { UPDATED COMPONENTS }};
  //-- That said, it's probably worth considering performance implications in either case.
  for (let x = 0; x < Object.keys(entities).length; x++) {
    let macroPhage = entities[Object.keys(entities)[x]];
    if (macroPhage.cdTimer > 0) {
      macroPhage.cdTimer -= 1;
    } else {
      console.log("Producing TNF");
      macroPhage.cdTimer = 300;
    }
    let xDif = macroPhage.x - macroPhage.goal.currentTarget.x;
    let yDif = macroPhage.y - macroPhage.goal.currentTarget.y;
    let dist = Math.sqrt(xDif * xDif + yDif * yDif);
    //check if in range

    if (!macroPhage.goal.targetLocked) {
      if (dist <= macroPhage.size) {
        macroPhage.goal.currentTarget.x = getRandomArbitrary(
          macroPhage.size,
          macroPhage.window.width
        );
        macroPhage.goal.currentTarget.y = getRandomArbitrary(
          macroPhage.size * 2,
          macroPhage.window.height + 150
        );
        console.log(
          " " +
            macroPhage.goal.currentTarget.x +
            ", " +
            macroPhage.goal.currentTarget.y
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
    }
  }

  return entities;
};
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}

function outBounds(x, y, window) {
  return x < 0 || y < 0 || x > window.width || y > window.height;
}

export { MoveBox, MoveMacro };
