import React from "react";
import "./Dashboard.scss";

import { Container, Row, Col } from "react-bootstrap";
import SubCard from "../SubjectCard/SubCard";
import Footer from "../Footer/Footer";

class Dashboard extends React.Component {
  render() {
    return (
      <Container className="p-5">
        <Row className="p-5">
          <Col>
            <SubCard />
          </Col>
          <Col>
            <SubCard />
          </Col>
          <Col>
            <SubCard />
          </Col>
        </Row>
        <Footer />
      </Container>
    );
  }
}

export default Dashboard;
