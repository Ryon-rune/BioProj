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

function AboutDetails(props) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
      }}
    >
      <Image
        style={{
          borderRadius: "50%",
          width: 150,
          height: 150,
          alignSelf: "center",
          background: props.imageSrc,
          backgroundPosition: "center",
          backgroundSize: "auto 80px",
          marginBottom: "2em",
        }}
        fluid
        src={props.imageSrc}
      />
      <h3
        style={{
          display: "block",
          flexDirection: "row",
          color: "#2c4058",
          fontWeight: "600",
          fontSize: "30px",
        }}
      >
        {props.name}
      </h3>
    </div>
  );
}

export default AboutDetails;
