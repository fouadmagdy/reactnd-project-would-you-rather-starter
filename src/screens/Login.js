import React, { useState, useEffect } from 'react'
import { Form, Col, Button } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { listUsers, login } from '../actions/userActions'
import { listQuestions } from '../actions/questionActions'

const Login = ({ history }) => {

    const dispatch = useDispatch()

    const [username, setUsername] = useState('')

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const [answeredQuestion, setAnsweredQuestion] = useState([])
    console.log('answeredQuestion', answeredQuestion)





    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(login(username))
        history.push('/dashboard')
    }



    useEffect(() => {
        dispatch(listUsers())
        dispatch(listQuestions())

    }, [dispatch])



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
