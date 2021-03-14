import React, { useState } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

import { useDispatch } from 'react-redux'
import { login } from '../actions/userActions'

const Login = ({ history }) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')


    const handleSubmit = () => {
        dispatch(login(username))
        history.push('/dashboard')
    }

    return (
        <Form>
            <Form.Row>
                <Form.Group as={Col} controlId="users">
                    <Form.Label>users</Form.Label>
                    <Form.Control as="select" defaultValue="Choose..." onChange={(e) => setUsername(e.target.value)}>
                        <option>Choose...</option>
                        <option value="sarahedo">Sarah Edo</option>
                        <option value="tylermcginnis">Tyler McGinnis</option>
                        <option value="johndoe">John Doe</option>
                    </Form.Control>
                </Form.Group>

            </Form.Row>



            <Button variant="primary" type="submit" onClick={handleSubmit}>
                Submit
            </Button>
        </Form>
    )
}

export default Login
