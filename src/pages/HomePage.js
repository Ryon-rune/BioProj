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
export default class Home extends PureComponent {
  render() {
    return (
      <Container
        style={{
          position: "absolute",
          top: 0,
          left: -20,
          maxWidth: this.props.isMobile ? "100%" : "200%",
          width: this.props.isMobile ? "100%" : "100%",
          justifyContent: "center",
          alignSelf: "center",
        }}
        className="dr-example-container"
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            width: "100%",
          }}
        >
          <Image
            style={{
              width: "100%",
            }}
            fluid
            src={logYSprouts}
          ></Image>
        </div>
        <div
          style={{
            width: "100%",
            position: "absolute",
            top: "20vw",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1
            style={{
              fontWeight: "1000",
              fontSize: this.props.isMobile ? "5vw" : "3vw",
              paddingBottom: this.props.isMobile ? "0em" : "1em",
              color: "rgb(150,213,89)",
            }}
          >
            BIO Term Project
          </h1>
          <h5
            style={{
              color: "rgb(255,255,255)",
              fontWeight: "10",
              fontSize: this.props.isMobile ? "3vw" : "1.5vw",
              zIndex: 1,
            }}
          >
            Some Tag Line here?
          </h5>
        </div>
        <div>
          <span
            style={{
              color: "#2c4058",
              fontWeight: "800",
              fontSize: this.props.isMobile ? "4vw" : "2vw",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: this.props.isMobile ? "50%" : "45%",
            }}
          >
            OUR MAIN POINTS
          </span>
        </div>
        {/* <StructureView /> */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: "20px",
          }}
        >
          <div
            style={{
              width: "100px",
              height: "2px",
              background: "#2c3f58",
              marginBottom: "60px",
            }}
          ></div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            width: "90%",
          }}
        >
          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: "flex-start",
              maxWidth: this.props.isMobile ? "100%" : "220%",
              width: this.props.isMobile ? "100%" : "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: props.isMobile ? "55vw" : "60px",
              marginBottom: this.props.isMobile ? "20em" : "8em",
              paddingLeft: this.props.isMobile ? "0%" : "100px",
              paddingTop: "20px",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "relative",
                  top: "-130px",
                  left: "0px",
                  width: this.props.isMobile ? "100%" : "150%",
                }}
              >
                <ImageText
                  imageSrc={cardboardPic}
                  title="POINT 1"
                  flip={false}
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText="Do we need a btn here?"
                  text="Some Text to make a point."
                ></ImageText>
              </div>
            </Shape>
          </div>
          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: this.props.isMobile ? "flex-start" : "flex-end",
              maxWidth: this.props.isMobile ? "90%" : "220%",
              width: this.props.isMobile ? "100%" : "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: "130px",
              paddingLeft: this.props.isMobile ? "0%" : "100px",
              paddingTop: "20px",
              marginBottom: this.props.isMobile ? "25em" : "2em",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "absolute",
                  top: "100px",
                  right: this.props.isMobile ? "0%" : "20%",
                  width: this.props.isMobile ? "100%" : "150%",
                }}
              >
                <ImageText
                  imageSrc={mushroomPic}
                  flip={true}
                  title="Point 2"
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText="Do we need a btn here?"
                  text="Some Text to make a point."
                ></ImageText>
              </div>
            </Shape>
          </div>

          <div
            style={{
              display: "block",
              flexDirection: "row",
              position: "relative",
              alignSelf: "flex-start",
              maxWidth: this.props.isMobile ? "100%" : "220%",
              width: this.props.isMobile ? "100%" : "600px",
              height: "475px",
              background: "rgb(150, 213, 89)",
              // marginBottom: props.isMobile ? "55vw" : "60px",
              marginBottom: this.props.isMobile ? "20em" : "8em",
              paddingLeft: this.props.isMobile ? "0%" : "100px",
              paddingTop: "20px",
            }}
          >
            <Shape>
              <div
                style={{
                  position: "relative",
                  top: "-130px",
                  left: "0px",
                  width: this.props.isMobile ? "100%" : "150%",
                }}
              >
                <ImageText
                  imageSrc={mushroomPic}
                  title="More Points"
                  flip={false}
                  link="/"
                  isMobile={this.props.isMobile}
                  btnText="Do we need a btn here?"
                  text="We could Have videos instead of images."
                ></ImageText>
              </div>
            </Shape>
          </div>

          <Image
            style={{
              maxWidth: this.props.isMobile ? "112%" : "220%",
              width: "111%",
            }}
            fluid
            src={bgSilhouette}
          ></Image>
          <BottomHeader isMobile={this.props.isMobile} homePage={"HOMEPAGE"} />
        </div>
      </Container>
    );
  }
}
