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

  componentDidMount() {
    this.setState({ subject: this.props.data });
  }

  render() {
    return (
      <>
        <DashHeader
          title={
            this.props.data.name +
            " (" +
            this.props.data.classLinks.length +
            ")"
          }
        />
        <Container className="subject-page-container">
          <Row className="subject-header">
            <Col className="subject-col">Date</Col>
            <Col className="subject-col">Link</Col>
            <Col className="subject-col">Action</Col>
          </Row>
          {this.props.data.classLinks.length > 0 ? (
            this.props.data.classLinks.map((link, key) => (
              <Row className="subject-row">
                <Col md={4} sm={12} className="subject-col">
                  {link.date}
                </Col>
                <Col md={4} sm={12} className="subject-col">
                  <a href={link.link}>
                    <Button className="btn">View Class</Button>
                  </a>
                </Col>
                <Col md={4} sm={12} className="subject-col">
                  <Form.Check type="checkbox" label="Watched" />
                </Col>
              </Row>
            ))
          ) : (
            <Row className="subject-row">
              <Col sm={12} className="subject-col">
                No Recordings Available
              </Col>
            </Row>
          )}
        </Container>
      </>
    );
  }
}

export default SubjectPage;
