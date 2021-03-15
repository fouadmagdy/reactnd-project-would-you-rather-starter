import React from 'react'
import { useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

const Header = () => {

    const userLogin = useSelector((state) => state.userLogin)
    const { userlogin } = userLogin

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to='/'>
                <Navbar.Brand>Would you Rather</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link href="#home">New Question</Nav.Link>
                    <Nav.Link href="#link">LeaderBoard</Nav.Link>
                    <Nav.Link href="#link"><img src={users && users[userlogin].avatarURL} className="img-fluid" style={{ width: '30px' }} alt="avatar" /> {userlogin}</Nav.Link>
                    <Nav.Link href="#link">Logout</Nav.Link>
                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
