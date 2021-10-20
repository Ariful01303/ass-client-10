
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import useAuth from '../Hooks/useAuth';

import './Header.css'


const Header = () => {
 const {user,logOut}= useAuth()
    return (
        <div>
             <Navbar bg="light" variant="light" sticky="top" collapseOnSelect expand="lg">
    <Container>
    <Navbar.Brand href="#home">Dental Care</Navbar.Brand>
    <Navbar.Toggle />
    <Navbar.Collapse className="justify-content-end">

      <Nav.Link as ={HashLink} to="/home#home">Home</Nav.Link>
      <Nav.Link as ={HashLink} to="/home#service">Service</Nav.Link>
      <Nav.Link as ={Link} to="/dantists">Our Dentists</Nav.Link>
      <Nav.Link as ={Link} to="/about">About Us</Nav.Link>

     {user?.email? <Button onClick={logOut} variant="danger">LogOut</Button>:
      <Nav.Link as ={Link} to="/login">login</Nav.Link>}

     { user?.email?<Navbar.Text className="d-flex ms-5"><p className="col-title">{user?.displayName} </p> {user?.photoURL?<img className="header-photo" src={user?.photoURL} alt="" />:<p className="col-title"> {user?.email}</p>}
      </Navbar.Text>
      :<p className="col-title">Please Login</p>}
    </Navbar.Collapse>
   
    </Container>
    </Navbar>
        </div>
    );
};

export default Header;