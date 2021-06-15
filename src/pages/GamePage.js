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
import { Box, Macrophage } from "../components/renderers";
import { MoveBox, MoveMacro } from "../components/systems";

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
          style={{ ...window, backgroundColor: "blue" }}
          systems={[MoveBox, MoveMacro]}
          entities={{
            //-- Notice that each entity has a unique id (required)
            //-- and a renderer property (optional). If no renderer
            //-- is supplied with the entity - it won't get displayed.
            m1: {
              x: 150,
              y: 200,
              window: window,
              spd: 0.1,
              size: 75,
              cdTimer: 300,
              goal: { targetLocked: false, currentTarget: { x: 200, y: 400 } },
              type: "M",
              renderer: <Macrophage />,
            },
          }}
        ></GameEngine>
        {/* *****************************************ENGINE **************************************** */}
      </Container>
    );
  }
}
