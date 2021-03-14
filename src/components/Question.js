import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Question = () => {
    return (
        <Col md={4} className="mt-5">
            <Card>
                <Card.Body>
                    <ul className="list-unstyled">
                        <li>Would You Rather</li>

                        <ul>
                            <li>Write javascript</li>
                            <li>Write swift</li>
                        </ul>

                    </ul>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default Question
