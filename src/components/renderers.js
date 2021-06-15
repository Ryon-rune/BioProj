import React, { PureComponent } from "react";

class Box extends PureComponent {
  render() {
    const size = 100;
    const x = this.props.x - size / 2;
    const y = this.props.y - size / 2;
    return (
      <div
        style={{
          position: "absolute",
          width: size,
          height: size,
          backgroundColor: "red",
          left: x,
          top: y,
        }}
      />
    );
  }
}

class Macrophage extends PureComponent {
  render() {
    const x = this.props.x - this.props.size / 2;
    const y = this.props.y - this.props.size / 2;
    return (
      <div
        style={{
          position: "absolute",
          width: this.props.size,
          height: this.props.size,
          backgroundColor: "red",
          borderRadius: "50%",
          color: "black",
          fontSize: 20,
          fontWeight: "bold",
          left: x,
          top: y,
        }}
      >
        M
      </div>
    );
  }
}

export { Box, Macrophage };
