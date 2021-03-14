import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Navbar.Brand href="#home">Would you Rather</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">New Question</Nav.Link>
                    <Nav.Link href="#link">LeaderBoard</Nav.Link>
                    <Nav.Link href="#link">username</Nav.Link>
                    <Nav.Link href="#link">Logout</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
