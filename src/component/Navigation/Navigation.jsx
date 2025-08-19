import logo from '../../icon.png';

import './Navigation.css';

import { Container, Nav, Navbar } from 'react-bootstrap';

function Navigation() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary" fixed='top' collapseOnSelect>
        <Container fluid>
          <a href='#home'>
            <img className='logo' src={logo} alt='logo' height='50px'></img>
          </a>
          <Navbar.Brand className='brandName' href="#home">Q23079's portfolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home" className='navLink'>Home</Nav.Link>
              <Nav.Link href="#about" className='navLink'>About</Nav.Link>
              <Nav.Link href='https://e1q23079.vercel.app/' className='navLink'>Blog</Nav.Link>
              <Nav.Link href="#works" className='navLink'>Works</Nav.Link>
              <Nav.Link href="#products" className='navLink'>Products</Nav.Link>
              <Nav.Link href="#links" className='navLink'>Links</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default Navigation;
