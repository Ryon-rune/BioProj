import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import {
  Alert,
  Form,
  FormInput,
  FormGroup,
  Button,
  Container,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "shards-react";
import { Image } from "react-bootstrap";

function ImageText(props) {
  let btn = true;
  if (props.btn && props.btn === "none") btn = false;
  return (
    <Container className="dr-example-container">
      <div
        style={{
          display: "flex",
          flexDirection: props.isMobile ? "column" : "row",
          width: "90%",
        }}
      >
        {props.flip && props.isMobile && (
          <Image
            style={{
              // position: "absolute",
              // top: "55px",
              // left: "200px",
              // width: "800px",
              // height: "2px",
              // background: "#2c3f58",
              marginBottom: "20px",
              width: props.isMobile ? "90%" : "100%",
            }}
            fluid
            src={props.imageSrc}
          />
        )}
        {props.flip && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginRight: props.isMobile ? "-15vw" : "100px",
              width: props.isMobile ? "140%" : "150%",
              paddingBottom: props.isMobile ? "5em" : "2em",
              //   marginRight: "200px",
              //   marginRight: "500px",
              //   width: "100%",
            }}
          >
            <div
              style={{
                background: "rgb(216,232,230)",
                paddingLeft: "2em",
                paddingBottom: "2em",
                paddingTop: "1em",
              }}
            >
              <h3
                style={{
                  display: "block",
                  flexDirection: "row",
                  //   justifyContent: "flex-start",
                  color: "#2c4058",
                  fontWeight: "600",
                  fontSize: "30px",
                  paddingBottom: "1em",
                }}
              >
                {props.title}
              </h3>

              <div
                style={{
                  display: "block",
                  justifyContent: "flex-start",
                  left: "400px",
                  width: props.isMobile ? "90%" : "170%",
                  paddingRight: props.isMobile ? "0%" : "300px",
                  paddingBottom: "2em",
                }}
              >
                {props.text}
              </div>

              {btn && (
                <Link to={props.link}>
                  <Button outline theme="secondary">
                    {props.btnText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
        {(!props.flip || !props.isMobile) && (
          <Image
            style={{
              // position: "absolute",
              // top: "55px",
              // left: "200px",
              // width: "800px",
              // height: "2px",
              // background: "#2c3f58",
              marginBottom: "20px",
              width: props.isMobile ? (props.text2 ? "150%" : "100%") : "100%",
            }}
            fluid
            src={props.imageSrc}
          />
        )}

        {!props.flip && (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: props.isMobile ? "0vw" : "50px",
              paddingBottom: props.isMobile ? "5em" : "2em",
              width: props.isMobile ? (props.text2 ? "145%" : "140%") : "150%",
            }}
          >
            <div
              style={{
                background: "rgb(216,232,230)",
                paddingLeft: "2em",
                paddingBottom: "2em",
                width: props.isMobile ? "90%" : props.text2 ? "350%" : "250%",
                paddingTop: "1em",
              }}
            >
              <h3
                style={{
                  display: "block",
                  flexDirection: "row",
                  //   justifyContent: "flex-start",
                  color: "#2c4058",
                  fontWeight: "600",
                  fontSize: "30px",
                  paddingBottom: "1em",
                }}
              >
                {props.title}
              </h3>

              <p
                style={{
                  flexWrap: "wrap",
                  wordWrap: "break-word",
                  justifyContent: "flex-start",
                  width: "90%",
                  paddingBottom: "2em",
                }}
              >
                {props.text}
              </p>
              {props.text2 && (
                <p
                  style={{
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    justifyContent: "flex-start",
                    width: "90%",
                    paddingBottom: "2em",
                  }}
                >
                  After months of research, we found a surprising possible
                  answer to our cardboard problem: mushrooms. As part of a UBC
                  course on sustainability, members of our team researched the
                  mycoremediation of cardboard, in other words, the removal of
                  cardboard waste by way of decomposition via Pleurotus
                  ostreatus, the blue oyster mushroom. Through this study, we
                  found that despite a heavy push for recycling across Canada,
                  paper and cardboard waste makes up about 10% of the nation’s
                  landfills, with around 40% of this recyclable waste going to
                  landfill <sup>1</sup>. What’s more, the degradation of these
                  organic wastes in low-oxygen landfill environments leads to
                  the release of harmful methane gases, which are rated at about
                  32 times the Global Warming Potential (GWP) of CO2 emissions{" "}
                  <sup>2</sup>. With online orders doubling over the COVID-19
                  pandemic, we expect these numbers to rise <sup>3</sup>.
                </p>
              )}
              {props.text3 && (
                <p
                  style={{
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    justifyContent: "flex-start",
                    width: "90%",
                    paddingBottom: "2em",
                  }}
                >
                  So where do mushrooms fit in to all of this? Across the world,
                  researchers have been conducting experiments on the use of
                  mushrooms to decompose cardboard waste, and what they found
                  was astonishing: cardboard and paper waste actually performed
                  better as media for mushroom growth, with fruiting bodies
                  growing faster, larger, and with higher nutritional value than
                  those grown on conventional substrates <sup>456</sup> . With
                  the aid of vermiculture and organic compositing methods, our
                  goal is to utilize these environmentally friendly processes to
                  reduce carbon emissions from paper-based waste, create
                  nutritious mushroom products, and produce organic compost for
                  the cultivation of additional food crops, creating a
                  completely zero-waste cycle from trash to table!
                </p>
              )}
              {props.text4 && (
                <p
                  style={{
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    justifyContent: "flex-start",
                    width: "90%",
                    paddingBottom: "2em",
                  }}
                >
                  TakeIt Recycling was founded in 2020 by Justin Chang, Griffin
                  Hay, Shaiv Kamat, and Wyatt Steinberg, four UBC students whose
                  studies range from history to agriculture to engineering.
                  Visit our contact page for service inquiries, or if you have
                  any questions – we’d love to chat!
                </p>
              )}
              {props.text4 && (
                <div
                  style={{
                    flexWrap: "wrap",
                    wordWrap: "break-word",
                    justifyContent: "flex-start",
                    width: "90%",
                    paddingBottom: "2em",
                    fontSize: "8px",
                  }}
                >
                  <ul style={{ listStyleType: "none" }}>
                    <li>
                      <sup>1</sup>Environment and Climate Change Canada. (2020,
                      July 07). National Waste Characterization Report: The
                      Composition of Canadian Residual Municipal Solid Waste.
                      (http://publications.gc.ca/site/eng/9.884760/publication.html)
                    </li>
                    <li>
                      <sup>2</sup>Environmental Protection Agency. (2020,
                      September 09). Understanding Global Warming Potentials.
                      (https://www.epa.gov/ghgemissions/understanding-global-warming-potentials)
                    </li>
                    <li>
                      <sup>3</sup>Aston, J., Youssouf, O., Virgin, K., &amp;amp;
                      Vipond, O. (2020, July 24). Retail e-commerce and
                      COVID-19: How online shopping opened doors while many were
                      closing.
                      (https://www150.statcan.gc.ca/n1/pub/45-28-0001/2020001/article/00064-eng.htm)
                    </li>
                    <li>
                      <sup>4</sup> Kulshreshtha, S., Mathur, N., &amp;
                      Bhatnagar, P. (2014). Mushroom as a product and their role
                      in mycoremediation.
                    </li>
                    <li>
                      <sup>5</sup> Mandeel, Q. A., Al-Laith, A. A., &amp;
                      Mohamed, S. A. (2005). Cultivation of oyster mushrooms
                      (pleurotus spp.) on various lignocellulosic wastes. World
                      Journal of Microbiology and Biotechnology, 21(4), 601-607.
                    </li>
                    <li>
                      <sup>6</sup> Owaid, M., Abed, A., &amp; Nassar, B. (2015).
                      Recycling cardboard wastes to produce blue oyster MUSHROOM
                      Pleurotus ostreatus in Iraq. Emirates Journal of Food and
                      Agriculture, 27(7), 537.
                    </li>
                  </ul>
                </div>
              )}

              {btn && (
                <Link to={props.link}>
                  <Button outline theme="secondary">
                    {props.btnText}
                  </Button>
                </Link>
              )}
            </div>
          </div>
        )}
      </div>
    </Container>
  );
}

export default ImageText;

/*

function ImageText(props) {
  return (
    <Container className="dr-example-container">
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <Image
          style={{
            // position: "absolute",
            // top: "55px",
            // left: "200px",
            // width: "800px",
            // height: "2px",
            // background: "#2c3f58",
            marginBottom: "60px",
            width: "100%",
          }}
          fluid
          src={props.imageSrc}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "50px",
          }}
        >
          <h3
            style={{
              display: "block",
              flexDirection: "row",
              //   justifyContent: "flex-start",
              color: "#2c4058",
              fontWeight: "600",
              fontSize: "30px",
            }}
          >
            {props.title}
          </h3>

          <div
            style={{
              display: "block",
              justifyContent: "flex-start",
            }}
          >
            {props.text}
          </div>

          <Button outline theme="secondary">
            {props.btnText}
          </Button>
        </div>
      </div>
    </Container>
  );
}
*/
