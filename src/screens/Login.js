import React from 'react'
import { Form, Col, Button } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { login } from '../actions/userActions'

const Login = ({ history }) => {

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { loading, error, userlogin } = userLogin


    const handleLogin = (username) => {
        dispatch(login(username))
        history.push('/')
    }

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="users">
                    <Form.Label>users</Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." onChange={(e) => handleLogin(e.target.value)}>
                        <option>Choose...</option>
                        <option value="sarahedo">Sarah Edo</option>
                        <option value="tylermcginnis">Tyler McGinnis</option>
                        <option value="johndoe">John Doe</option>
                    </Form.Control>
                </Form.Group>

            </Form.Row>



            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
    )
}

export default Login
