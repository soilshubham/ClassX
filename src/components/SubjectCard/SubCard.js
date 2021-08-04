import React from "react";

import { Card, Button } from "react-bootstrap";

class SubCard extends React.Component {
  render() {
    return (
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://www.fillmurray.com/640/360" />
        <Card.Body>
          <Card.Title>Subject 1</Card.Title>
          <Card.Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
            necessitatibus.
          </Card.Text>
          <Button variant="primary">Get Resources</Button>
        </Card.Body>
      </Card>
    );
  }
}

export default SubCard;
