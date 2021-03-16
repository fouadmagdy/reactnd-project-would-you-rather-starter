import React, { useState } from 'react'

import { Col, Card, Button, Form } from 'react-bootstrap'



const NewQuestion = () => {

    const [optionOne, setOptionOne] = useState('')
    const [optionTwo, setOptionTwo] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(optionOne, optionTwo)
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


                        <Button type="submit" variant="primary" disabled={optionOne && optionTwo === ''} onClick={handleSubmit}>
                            Submit
                        </Button>
                    </Form>

                </Card.Body>
            </Card>
        </Col>
    )
}

export default NewQuestion
