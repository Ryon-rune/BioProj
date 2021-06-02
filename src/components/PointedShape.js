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

function PointedShape(props) {
  const [shapeData, setShapeData] = useState([]);
  const setup = () => {
    //16
    let data = [];
    let tempData = [];

    for (let x = 0; x < 16; x++) {
      tempData[x] = x;
    }
    for (let x = 0; x < 16; x++) {
      let temp = (
        <div
          style={{
            width: "100%",
            justifyContent: "space-between",
          }}
        >
          {tempData.map((index) => {
            return (
              <div
                style={{
                  backgroundColor: "rgb(200,200,100)",
                  width: "10",
                  height: "10",
                  borderRadius: "5",
                }}
              ></div>
            );
          })}
        </div>
      );
      data.push(temp);
    }
    setShapeData(data);
  };
  if (shapeData.length < 1) {
    setup();
  }
  return (
    <Container className="dr-example-container">
      <div
        style={{
          display: "flex",
          height: "200px",
          justifyContent: "space-between",
          flexDirection: "column",
        }}
      >
        {shapeData.length > 1 &&
          shapeData.map((data, index) => {
            return (
              <div
                style={{
                  display: "flex",
                  width: "200px",
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                {shapeData.map((index) => {
                  return (
                    <div
                      style={{
                        background: "#ffffff",
                        width: "4px",
                        height: "4px",
                        borderRadius: "2px",
                      }}
                    ></div>
                  );
                })}
              </div>
            );
          })}
      </div>
      {props.children}
    </Container>
  );
}

export default PointedShape;
