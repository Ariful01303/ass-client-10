import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';


const Header = () => {
    return (
        <div>
             <Navbar bg="dark" variant="dark"  fixed="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Navbar</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

      <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as ={HashLink} to="/home#service">Service</Nav.Link>
      <Nav.Link as ={HashLink} to="/home#dantists">Our Dentists</Nav.Link>
      
      <Nav.Link as ={Link} to="/appointment">Appointment</Nav.Link>
     {/* {users?.gmail? */}
      <Button variant="light">Our Clients</Button> :
      <Navbar.Text>
        Signed in as: <a href="#login">
            {}
        </a>
      </Navbar.Text>
    </Navbar.Collapse>
   
    </Container>
    </Navbar>
        </div>
    );
};

export default Header;