import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

function NavSection() {
  return (
      <Navbar bg="light">
        <Nav className="mr-auto">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/photography">Photography</Nav.Link>
          <Nav.Link href="/wedding">Wedding</Nav.Link>
      </Nav>
      </Navbar>
  );
}

export default NavSection;
