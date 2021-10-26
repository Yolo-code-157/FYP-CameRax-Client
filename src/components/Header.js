import React from 'react'
import {
    Container,
    Nav,
    Navbar,
  } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext"


function Header() {
    const { currentUser } = useAuth()

    return (
        <>
        <Navbar bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="/">CameRax</Navbar.Brand>
          
          {!currentUser ? (
            <Nav className="me-auto">
            <Nav.Link href="/login">Login</Nav.Link>
            {/* <Nav.Link href="/signup">Register</Nav.Link> */}
            </Nav>
        ) : (
            <Nav className="me-auto">
            <Navbar.Brand>User: {currentUser.email}</Navbar.Brand> 
            <Nav.Link href="/camera">Camera View</Nav.Link>
            <Nav.Link href="/dashboard">Profile</Nav.Link>
            </Nav>
        )}
          </Container>
        </Navbar>
      </>
    )
}

export default Header
