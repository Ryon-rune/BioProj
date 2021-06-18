import React, { PureComponent } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "shards-react";
import Shape from "../components/PointedShape";
import ImageText from "../components/ImageText";
import BottomHeader from "../components/BottomHeader";
import { Image } from "react-bootstrap";
import cardboardPic from "../res/landing-page/cardboard-services.jpg";
import mushroomPic from "../res/landing-page/Mushroom.jpg";
import logYSprouts from "../res/landing-page/banner-imagethrd.jpg";
import bgSilhouette from "../res/landing-page/bg.png";
import { GameEngine } from "react-game-engine";
import { Box, Macrophage, Site, Menu, Prog } from "../components/renderers";
import { addEnbrel, UpdateEntities, menuCheck } from "../components/systems";

const window = {
  width: 800,
  height: 600,
};
export default class Game extends PureComponent {
  render() {
    return (
      <Container
        style={{
          position: "absolute",
          top: 0,
          left: 300,
          maxWidth: this.props.isMobile ? "100%" : "200%",
          width: this.props.isMobile ? "100%" : "100%",
          paddingTop: "150px",
        }}
        className="dr-example-container"
      >
        {/* *****************************************ENGINE **************************************** */}
        <GameEngine
          style={{ ...window, backgroundColor: "#710C04" }}
          systems={[addEnbrel, UpdateEntities, menuCheck]}
          entities={{
            gameTable: { m: 1, t: 0, e: 0, window: window },
            menu: {
              stage: 0,
              title: [
                "Enbrel Simulation",
                "R.I.P your aneurysm ruptured",
                "Congrats! You lived a minute!",
              ],
              subtitle: ["Start Game", "Another Go?", "Another Go?"],
              renderer: <Menu />,
            },
            prog: {
              stage: 0,
              count: 0,
              maxCount: 6000,
              renderer: <Prog />,
            },
            // m1: {
            //   x: 150,
            //   y: 500,
            //   spd: 0.15,
            //   maxSpd: 2,
            //   inflameIncrease: 0.02,
            //   size: 75,
            //   cdTimer: 300,
            //   defaultTimer: 500,
            //   goal: {
            //     targetLocked: false,
            //     currentTarget: { x: 150, y: 700 },
            //     reached: false,
            //   },
            //   type: "M",
            //   id: "m1",
            //   renderer: <Macrophage />,
            // },
            // m2: {
            //   x: 250,
            //   y: 200,
            //   spd: 0.15,
            //   maxSpd: 2,
            //   inflameIncrease: 0.02,
            //   size: 75,
            //   cdTimer: 300,
            //   defaultTimer: 500,
            //   goal: {
            //     targetLocked: false,
            //     currentTarget: { x: 300, y: 600 },
            //     reached: false,
            //   },
            //   type: "M",
            //   id: "m2",
            //   renderer: <Macrophage />,
            // },
            // i1: {
            //   x: 500,
            //   y: 300,
            //   spd: 0.001,
            //   tnf: 0,
            //   fireTimer: 800,
            //   sizeBound: [80, 100],
            //   hasPopped: false,
            //   colour: "pink",
            //   size: 75,
            //   type: "I",
            //   id: "i1",
            //   popped: false,
            //   renderer: <Site />,
            // },
          }}
        ></GameEngine>
        {/* *****************************************ENGINE **************************************** */}
      </Container>
    );
  }
}
