import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Form, FormControl, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);

  const handleLogOut = e =>{
    signOut(auth);
  }
    return (
        <div>
            <Navbar sticky='top' style={{backgroundColor: 'black', color: 'white'}} variant='dark'  expand="lg">
  <Container fluid>
    <Navbar.Brand href="#">Phone Zone</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link as={Link} to={`/home`} >Home</Nav.Link>
        <Nav.Link >Link</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Link href="#" disabled>
          Link
        </Nav.Link>
      </Nav>
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-warning">Search</Button>
      </Form>
    </Navbar.Collapse>
    {
      user?
      <Nav.Link onClick={handleLogOut} as={Link} to={`/login`} style={{color: 'red'}} >Log Out</Nav.Link>
      :
      <Nav.Link as={Link} to={`/login`} style={{color: 'white'}} >Login</Nav.Link>
    }
  </Container>
</Navbar>
        </div>
    );
};

export default Header;