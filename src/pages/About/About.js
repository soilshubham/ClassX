import React from "react";

import "./About.scss";
import { Container, Row, Col, Image, Card } from "react-bootstrap";
import DashHeader from "../../components/DashHeader/DashHeader";

import AboutIMG from "../../assets/images/about.jpeg";
import MeIMG from "../../assets/images/me.jpg";
class About extends React.Component {
  render() {
    document.title = "ClassX - " + "About";
    return (
      <>
        <DashHeader title="About" />
        <Container className="about-page">
          <h3 style={{ fontWeight: "600", marginBottom: "1rem" }}>ClassX</h3>
          <Row className="about-content">
            <Col md={6}>
              <p className="">
                <p className="mb-3">
                  ClassX is a web app built for students at SRM University AP.
                  This can be used to manage the lecture recordings in an
                  efficient and less time consuming way.
                </p>
                <p className="mb-2">ClassX provides the following features:</p>
                <ul className="mb-4">
                  <li>Manage all the lecture recordings.</li>
                  <li>Get latest updates on new lectures.</li>
                  <li>Track your progress.</li>
                  <li>All your class recordings at one place.</li>
                </ul>
                <p>
                  ClassX is built specifically for students at SRM University
                  AP. To give any feedback or suggestion react out to me
                  <a
                    href="https://twitter.com/soilshubham"
                    target="_blank"
                    rel="noreferrer noopener"
                  >
                    {" "}
                    @Sahil Shubham
                  </a>
                  .
                </p>
              </p>
            </Col>
            <Col md={5}>
              <Image className="about-image" src={AboutIMG} fluid />
            </Col>
          </Row>
          <Row style={{ width: "15rem" }}>
            <Col>
              <a
                href="https://github.com/soilshubham"
                target="_blank"
                rel="noreferrer noopener"
                className="card-link"
              >
                <Card className="about-auth-card">
                  <Card.Img variant="top" src={MeIMG} className="image" />
                  <Card.Body className="card-body">
                    <Card.Title className="title">Sahil Shubham</Card.Title>
                    <Card.Text className="desc">ClassX</Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}

export default About;
