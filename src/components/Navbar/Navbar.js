import React from "react";

import "./Navbar.scss";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";

class NavbarComp extends React.Component {
  render() {
    return (
      <Navbar
        className="navbar-container fixed-top"
        variant="light"
        expand="md"
      >
        <Container>
          <Navbar.Brand className="brand-text">ClassX</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav-links" id="basic-navbar-nav">
            <Nav className="me-auto">
              {/* <Nav.Link href="#link">About</Nav.Link> */}
              <NavDropdown
                title="Subject"
                id="basic-nav-dropdown"
                className="nav-items"
              >
                {this.props.subData.map((obj, key) => (
                  <NavDropdown.Item key={key}>{obj.name}</NavDropdown.Item>
                ))}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComp;
