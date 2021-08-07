import React from "react";

import { Container, Row, Col } from "react-bootstrap";
import SubCard from "../../components/SubjectCard/SubCard";
import DashHeader from "../../components/DashHeader/DashHeader";

class Dashboard extends React.Component {
  render() {
    return (
      <>
        <DashHeader title="Home" />
        <Container className="">
          <Row className="d-flex justify-content-center">
            {this.props.subData.map((obj, key) => (
              <Col lg={4} md={6} sm={12}>
                <SubCard
                  key={key}
                  name={obj.name}
                  sub={obj.sub}
                  cover={obj.cover}
                  color={obj.color}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  }
}

export default Dashboard;
