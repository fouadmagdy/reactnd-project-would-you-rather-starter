import React from 'react'
import { Col, Card } from 'react-bootstrap'

const Question = ({ question, userAnswer }) => {
    console.log('userAnswer', userAnswer)

    return (
        <Col md={4} className="mt-5">
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
        </Col>
    )
}

export default Question

// function mapStateToProps ({ questions, users, authedUser }) {
//     const user = users[authedUser];
//     const answeredQuestions = Object.keys(user.answers)
//       .sort((a,b) => questions[b].timestamp - questions[a].timestamp);
//     return {
//       unansweredQuestions : Object.keys(questions).filter(qid => !answeredQuestions.includes(qid))
//         .sort((a,b) => questions[b].timestamp - questions[a].timestamp),
//       answeredQuestions
//     }
//   }