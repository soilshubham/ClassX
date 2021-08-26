import React, { Component } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Image, Card } from "react-bootstrap";

import LottieAnimation from "./Lottie";
import loadingAnim from "./assets/loading.json";

import "./App.scss";

class ServerDown extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subData: "",
    };
  }

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "90vh",
          padding: "0 1rem",
        }}
      >
        <Container
          style={{
            background: "#fff",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            padding: "5rem",
            borderRadius: "7px",
            boxShadow:
              "rgba(0, 0, 0, 0.01) 0px 10px 30px 0px, rgba(0, 0, 0, 0.05) 0px 0px 30px 1px",
          }}
        >
          <Row>
            <Col
              style={{
                fontFamily: "Open Sans",
                fontWeight: "500",
                fontSize: "1rem",
                textAlign: "center",
              }}
            >
              ClassX
            </Col>
          </Row>
          <Row>
            <Col style={styles}>Under Maintenance!</Col>
          </Row>
          <Row>
            <Col style={{}}>
              <LottieAnimation lotti={loadingAnim} height={200} width={300} />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

let styles = {
  fontFamily: "Open Sans",
  fontWeight: "700",
  fontSize: "2rem",
  textAlign: "center",
  padding: "0 2rem",
};
export default ServerDown;
