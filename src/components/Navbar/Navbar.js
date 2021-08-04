import React from 'react'

import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap';

class NavbarComp extends React.Component {
    render(){
        return (
          <Navbar bg="light" expand="lg">
              <Container>
                  <Navbar.Brand href="#home">ClassX</Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                      <Nav.Link href="#home">Home</Nav.Link>
                      <Nav.Link href="#link">About</Nav.Link>
                      <NavDropdown title="Subject" id="basic-nav-dropdown">
                      <NavDropdown.Item href="#action/3.1">Sub 1</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.2">Sub 2</NavDropdown.Item>
                      <NavDropdown.Item href="#action/3.3">Sub 3</NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item href="#action/3.4">Change Class</NavDropdown.Item>
                      </NavDropdown>
                  </Nav>
                  </Navbar.Collapse>
              </Container>
          </Navbar>
        );
    }
}

export default NavbarComp;