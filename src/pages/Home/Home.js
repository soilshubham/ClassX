import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import SubCard from "../../components/SubjectCard/SubCard";
import DashHeader from "../../components/DashHeader/DashHeader";

import "./Home.scss";

class Dashboard extends React.Component {
  componentDidMount() {
    document.title = "ClassX - " + "Home";
  }
  render() {
    return (
      <>
        <DashHeader title="Home" />
        <Container className="home-container">
          <Row className="d-flex justify-content-center">
            {this.props.subData.length > 0
              ? this.props.subData.map((obj, key) => (
                  <Col lg={4} md={6} sm={12}>
                    <SubCard
                      key={key}
                      name={obj.name}
                      sub={obj.sub}
                      cover={obj.cover}
                      color={obj.color}
                    />
                  </Col>
                ))
              : [0, 1, 2].map((obj, key) => (
                  <Col lg={4} md={6} sm={12}>
                    <SubCard key={key} name="" sub="" cover="" color="" />
                  </Col>
                ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;
