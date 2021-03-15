import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveQuestions } from '../actions/questionActions'
import { Col, Card, Button, Form } from 'react-bootstrap'

const QuestionDetails = ({ match, history }) => {

    const id = match.params.id

    const dispatch = useDispatch()


    const userLogin = useSelector((state) => state.userLogin)
    const { userlogin } = userLogin

    const [checkBox, setCheckBox] = useState('')

    const questionList = useSelector((state) => state.questionList)
    const { loading: loadingQuestion, error: errorQuestion, questions } = questionList


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveQuestions(userlogin, id, checkBox))
        history.push('/dashboard')
    }

    return (
        <Col md={4} className="mt-5">
            <Card>
                <Card.Header><img /> username </Card.Header>
                <Card.Body>
                    <Card.Title>Would You Rather</Card.Title>
                    <Card.Text>
                        <Form noValidate onSubmit={handleSubmit}>
                            <Form.Check
                                type='radio'
                                id='questionone'
                                label={questions[id].optionOne.text}
                                name='answerquestion'
                                value="optionOne"
                                onChange={(e) => setCheckBox(e.target.value)}
                            />
                            <Form.Check
                                type='radio'
                                id='questiontwo'
                                label={questions[id].optionTwo.text}
                                name='answerquestion'
                                value="optionTwo"
                                onChange={(e) => setCheckBox(e.target.value)}
                            />
                        </Form>
                    </Card.Text>
                    <Button variant="primary" disabled={checkBox === ''} onClick={handleSubmit}>Submit</Button>
                </Card.Body>
            </Card>
        </Col>
    )
}

export default QuestionDetails
