import React from 'react'
import {Navbar, Nav, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';


const Header = () => {
    return (
      <Navbar className="navbar navbar-expand-lg navbar-dark bg-primary">
        <Container>
          <LinkContainer to = "/">
            <Navbar.Brand>Dhakatopi</Navbar.Brand>
          </LinkContainer>
          
            <Nav className="ml-auto">
              <LinkContainer to = '/cart'>
              <Nav.Link> 
                 <i className ="fas fa-shopping-cart"></i> Cart</Nav.Link>
              </LinkContainer>
               <LinkContainer to = '/login'>
               <Nav.Link> <i className ="fas fa-user"></i> Sign in</Nav.Link>
               </LinkContainer>
              
            </Nav>
         
        </Container>
      </Navbar>
    )
}

export default Header

