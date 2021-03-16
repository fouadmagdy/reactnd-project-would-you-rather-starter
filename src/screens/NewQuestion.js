import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { newQuestions, listQuestions } from '../actions/questionActions'

import { Col, Card, Button, Form } from 'react-bootstrap'



const NewQuestion = ({ history }) => {

    const dispatch = useDispatch()

    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')

    const userLogin = useSelector((state) => state.userLogin)
    const { userlogin } = userLogin

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(newQuestions(userlogin, optionOne, optionTwo))
        dispatch(listQuestions())
        history.push('/dashboard')
    }



    return (
        <Col md={4} className="mt-5">
            <Card>
                <Card.Body>
                    <Card.Title>Would You Rather</Card.Title>
                    <Form onSubmit={handleSubmit}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Option One</Form.Label>
                            <Form.Control type="text" placeholder="Option One" onChange={(e) => setOptionOne(e.target.value)} />
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Option Two</Form.Label>
                            <Form.Control type="text" placeholder="Option Two" onChange={(e) => setOptionTwo(e.target.value)} />
                        </Form.Group>


                        <Button type="submit" variant="primary" disabled={optionOne === '' || optionTwo === ''} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default NewQuestion
