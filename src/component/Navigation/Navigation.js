import logo from '../../icon.png';

import './Navigation.css';

import { Container, Nav, Navbar } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed='top' collapseOnSelect>
        <Container fluid>
          <a href='#top'>
            <img className='logo' src={logo} alt='logo' height='50px'></img>
          </a>
          <Navbar.Brand className='brandName' href="#top">e1q23079's portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#top">Home</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#works">Works</Nav.Link>
              <Nav.Link href="#products">Products</Nav.Link>
              <Nav.Link href="#links">Links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
