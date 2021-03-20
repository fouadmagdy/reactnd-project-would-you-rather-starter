import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { Navbar, Nav } from 'react-bootstrap'

import { logout } from '../actions/userActions'

const Header = () => {

    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const { userlogin } = userLogin

    const userList = useSelector((state) => state.userList)
    const { users } = userList

    const handleLogout = () => {
        dispatch(logout())
    }

    return (
        <Navbar bg="light" expand="lg">
            <LinkContainer to='/'>
                <Navbar.Brand>Would you Rather</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className={userlogin ? 'ml-auto' : 'ml-auto d-none'}>
                    <LinkContainer to='/new'>
                        <Nav.Link href="#home">New Question</Nav.Link>
                    </LinkContainer>
                    <LinkContainer to='/leaderboard'>
                        <Nav.Link href="#link">LeaderBoard</Nav.Link>
                    </LinkContainer>
                    <Nav.Link><img src={users && userlogin && users[userlogin].avatarURL} className="img-fluid" style={{ width: '30px' }} alt="avatar" /> {userlogin && userlogin}</Nav.Link>

                    <LinkContainer to='/'>
                        <Nav.Link onClick={handleLogout}>Logout</Nav.Link>
                    </LinkContainer>

                </Nav>

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Header
