import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./SubCard.scss";

import { Card, Button } from "react-bootstrap";

class SubCard extends React.Component {
  render() {
    if (this.props.sub.length > 0) {
      return (
        <Card className={"subcard " + this.props.color}>
          <div className="cover-container">
            <div className="overlay"></div>
            <Card.Img className="cover" variant="top" src={this.props.cover} />
          </div>
          <Card.Body>
            <Card.Title className="title">
              <FontAwesomeIcon className="fa-icon" icon={faBook} />
              {this.props.name}
            </Card.Title>
            <hr />
            {/* <Card.Text className="text">{this.props.desc}</Card.Text> */}
            <Link to={"/sub/" + this.props.sub}>
              <Button className="btn">
                Get Resources
                <FontAwesomeIcon className="fa-icon" icon={faArrowRight} />
              </Button>
            </Link>
          </Card.Body>
        </Card>
      );
    } else {
      return (
        <Card className={"subcard-loading " + this.props.color}>
          <div className="cover-container">
            <div className="overlay"></div>
            <Card.Img className="cover" variant="top" src={""} />
          </div>
          <Card.Body>
            <Card.Title className="title">⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀</Card.Title>
            <hr />
            {/* <Card.Text className="text">{this.props.desc}</Card.Text> */}
            <Button className="btn" disabled>
              ⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀
            </Button>
          </Card.Body>
        </Card>
      );
    }
  }
}

export default SubCard;
