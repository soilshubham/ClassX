import React from "react";

import "./Navbar.scss";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

class NavbarComp extends React.Component {
  render() {
    return (
      <Navbar
        className="navbar-container fixed-top"
        variant="light"
        expand="md"
      >
        <Container>
          <Navbar.Brand className="brand-text">
            <Link to="/" className="navbar-links">
              ClassX
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse className="nav-links" id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link className="nav-items">
                <Link to="/" className="navbar-links">
                  Home
                </Link>
              </Nav.Link>
              {/* <Nav.Link className="nav-items">
                <Link to="/about" className="navbar-links">
                  About
                </Link>
              </Nav.Link> */}
              <NavDropdown
                title="Subject"
                id="basic-nav-dropdown"
                className="nav-items"
              >
                {this.props.subData.length > 0 ? (
                  this.props.subData.map((obj, key) => (
                    <NavDropdown.Item key={key} className="dropdown-item">
                      <Link to={"/sub/" + obj.sub} className="navbar-links">
                        <div>{obj.name}</div>
                      </Link>
                    </NavDropdown.Item>
                  ))
                ) : (
                  <NavDropdown.Item className="dropdown-item">
                    <div>Loading...</div>
                  </NavDropdown.Item>
                )}
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default NavbarComp;
