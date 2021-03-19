import React from 'react'
import { Link } from 'react-router-dom'
import { Col, Card } from 'react-bootstrap'

const Question = ({ question, userAnswer }) => {

    return (
        <Col md={4} className="mt-5">
            <Link to={`questiondetails/${question.id}?isAnswered=${userAnswer ? userAnswer : false}`}>
                <Card>
                    <Card.Body>
                        <ul className="list-unstyled">
                            <li>Would You Rather</li>

                            <ul>
                                <li className={userAnswer === 'optionOne' ? 'text-primary' : null}>{question && question.optionOne.text}</li>
                                <li className={userAnswer === 'optionTwo' ? 'text-primary' : null}>{question && question.optionTwo.text}</li>
                            </ul>

                        </ul>
                    </Card.Body>
                </Card>
            </Link>

        </Col>
    )
}

export default Question