import React from "react";

import { Navbar } from "react-bootstrap";

import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="light" className="footer">
        <div>ClassX - @Sahil Shubham</div>
      </Navbar>
    );
  }
}

export default Footer;
