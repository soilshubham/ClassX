import React from "react";
import { Container, Row, Col, Button, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import DashHeader from "../../components/DashHeader/DashHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";

import "./SubjectPage.scss";

class SubjectPage extends React.Component {
  constructor(props) {
    super(props);
    this.setSection = this.setSection.bind(this);
    this.state = {
      subject: {},
      section: "",
      availSec: ["b", "c"],
    };
  }

  componentDidMount() {
    this.setState({ subject: this.props.data });
  }

  setSection(sec) {
    this.setState({ section: sec });
  }

  render() {
    const filterSection = () => {};
    document.title = "ClassX - " + this.props.data.name.toString();

    return (
      <div className="mb-5">
        <DashHeader
          title={
            this.props.data.name +
            " (" +
            this.props.data.classLinks.length +
            ")"
          }
        />
        <Container className="subject-page-container">
          <Row>
            <Col className="sub-dropdown">
              <Dropdown className="dropdown">
                Filter: &nbsp;
                <Dropdown.Toggle id="dropdown-basic" className="title">
                  {this.state.section == ""
                    ? "Section"
                    : "Sec " + this.state.section.toUpperCase()}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => this.setSection("")}>
                    All Section
                  </Dropdown.Item>
                  {this.state.availSec.map((item, key) => {
                    return (
                      <Dropdown.Item onClick={() => this.setSection(item)}>
                        {"Sec " + item.toUpperCase()}
                      </Dropdown.Item>
                    );
                  })}
                </Dropdown.Menu>
              </Dropdown>
            </Col>
          </Row>
          <Row className="subject-header">
            <Col className="subject-col">Date</Col>
            <Col className="subject-col">Section</Col>
            <Col className="subject-col">Recording Link</Col>
          </Row>
          {this.props.data.classLinks.length > 0 ? (
            this.props.data.classLinks
              .filter((link) =>
                this.state.section.toLowerCase() != ""
                  ? link.sec.toLowerCase() == this.state.section.toLowerCase()
                  : link
              )
              .map((link, key) => (
                <Row className="subject-row">
                  <Col md={4} sm={6} className="subject-col">
                    {link.date}
                  </Col>
                  <Col md={4} sm={6} className="subject-col">
                    <span>Section: &nbsp;</span>
                    {link.sec !== null ? link.sec.toUpperCase() : "none"}
                  </Col>
                  <Col md={4} sm={12} className="subject-col">
                    <a
                      href={link.link}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      <Button className="btn">View Class</Button>
                    </a>
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
      </div>
    );
  }
}

export default SubjectPage;
