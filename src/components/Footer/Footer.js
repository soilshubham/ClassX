import React from "react";

import { Navbar, Container, NavbarBrand } from "react-bootstrap";

class Footer extends React.Component {
  render() {
    return (
      <div className="fixed-bottom">
        <Navbar color="dark" dark>
          <Container>
            <NavbarBrand>Footer</NavbarBrand>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Footer;
