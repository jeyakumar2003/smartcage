import React from 'react';
import { Navbar, Nav, Button, Container, Offcanvas, Image } from 'react-bootstrap';
import { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';

const Navigation = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar className='navigation p-4 sticky-top' bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">
            <Image src="images/logo.png" className='img-fluid' />
          </Navbar.Brand>
          <div className='d-flex align-items-center ms-auto'>
            <Navbar.Toggle onClick={handleShow} aria-controls="offcanvasNavbar" className='ms-auto' />
          </div>
          <Navbar.Collapse className='justify-content-end d-none d-lg-flex'>
            <Nav className="nav">
              <Link className='nav-link' to="/">Home</Link>
              <Link className='nav-link' to="about">About us</Link>
              <Link className='nav-link' to="products">Our Products</Link>
              <Link className='nav-link' to="contactus">Contact us</Link>
              <Button variant="primary">Download Brochure</Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Offcanvas Navigation for Mobile */}
      <Offcanvas show={show} onHide={handleClose} placement='end'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Menu</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link className='nav-link' href="#home" onClick={handleClose}>Home</Nav.Link>
            <Nav.Link className='nav-link' href="#about" onClick={handleClose}>About us</Nav.Link>
            <Nav.Link className='nav-link' href="#products" onClick={handleClose}>Our Products</Nav.Link>
            <Nav.Link className='nav-link' href="#contact" onClick={handleClose}>Contact us</Nav.Link>
            <Button variant="primary" className="mt-3" onClick={handleClose}>Download Brochure</Button>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navigation;
