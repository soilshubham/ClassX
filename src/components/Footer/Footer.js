import React from "react";

import { Navbar } from "react-bootstrap";

import "./Footer.scss";

class Footer extends React.Component {
  render() {
    return (
      <Navbar bg="light" className="footer">
        <a
          href="https://github.com/soilshubham"
          target="_blank"
          rel="noreferrer noopener"
        >
          ClassX - @Sahil Shubham
        </a>
      </Navbar>
    );
  }
}

export default Footer;
