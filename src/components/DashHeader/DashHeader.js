import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faHome } from "@fortawesome/free-solid-svg-icons";
import { Container, Row, Col } from "react-bootstrap";

import "./DashHeader.scss";

class DashHeader extends React.Component {
  render() {
    return (
      <>
        <Container className="dash-header-container">
          <h2 className="page-header">
            <Link to="/" className="content">
              {this.props.title === "Home" ? (
                <FontAwesomeIcon className="fas-icon" icon={faHome} />
              ) : (
                <FontAwesomeIcon className="fas-icon" icon={faArrowLeft} />
              )}
            </Link>
            {this.props.title}
          </h2>
        </Container>
      </>
    );
  }
}

export default DashHeader;
