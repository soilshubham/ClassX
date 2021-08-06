import React from "react";

import { Navbar } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="light" className="d-flex justify-content-center fixed-bottom">
        <div>copyright</div>
      </Navbar>
    );
  }
}

export default Footer;
