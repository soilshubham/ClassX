import React from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

import DashHeader from "../../components/DashHeader/DashHeader";

import "./SubjectPage.scss";

class SubjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: {},
    };
  }

  UNSAFE_componentWillMount() {
    for (let i = 0; i < this.props.subData.length; i++) {
      if (
        this.props.subData[i].sub ===
        window.location.pathname.slice(process.env.PUBLIC_URL.length + 5)
      ) {
        this.setState({ subject: this.props.subData[i] });
        break;
      }
    }
  }

  render() {
    return (
      <>
        <DashHeader
          title={
            this.state.subject.name +
            " (" +
            this.state.subject.classLinks.length +
            ")"
          }
        />
        <Container className="subject-page-container">
          <Row className="subject-header">
            <Col className="subject-col">Date</Col>
            <Col className="subject-col">Link</Col>
            <Col className="subject-col">Action</Col>
          </Row>
          {this.state.subject.classLinks.map((link, key) => (
            <Row className="subject-row">
              <Col md={4} sm={12} className="subject-col">
                {link.date}
              </Col>
              <Col md={4} sm={12} className="subject-col">
                <Link to="/lecturelink">
                  <Button className="btn">View Class</Button>
                </Link>
              </Col>
              <Col md={4} sm={12} className="subject-col">
                <Form.Check type="checkbox" label="Watched" />
              </Col>
            </Row>
          ))}
        </Container>
      </>
    );
  }
}

export default SubjectPage;
