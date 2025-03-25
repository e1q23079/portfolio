import logo from '../../icon.png';

import './Head.css';

import { Container, Nav, Navbar } from 'react-bootstrap';

function Head() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed='top'>
        <Container fluid>
          <a href='#home'>
            <img className='logo' src={logo} alt='logo' height='50px'></img>
          </a>
          <Navbar.Brand href="#home">e1q23079's portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#links">Links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default Head;
