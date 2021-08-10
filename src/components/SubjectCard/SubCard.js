import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBook, faArrowRight } from "@fortawesome/free-solid-svg-icons";

import "./SubCard.scss";

import { Card, Button } from "react-bootstrap";

class SubCard extends React.Component {
  render() {
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
              {this.props.sub.length > 0 ? "Get Resources" : "⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀⠀"}

              <FontAwesomeIcon className="fa-icon" icon={faArrowRight} />
            </Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

export default SubCard;
