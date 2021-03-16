import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveQuestions, listQuestions } from '../actions/questionActions'
import { Col, Card, Button, Form } from 'react-bootstrap'

const QuestionDetails = ({ match }) => {

    const id = match.params.id

    const dispatch = useDispatch()


    const [checkBox, setCheckBox] = useState('')
    const [total, setTotal] = useState(0)

    const questionList = useSelector((state) => state.questionList)
    const { loading: loadingQuestion, error: errorQuestion, questions } = questionList

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList
    const [showProgress, setShowProgress] = useState(false)




    const calculateTotal = () => {
        setTotal(questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length);
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        // dispatch(saveQuestions(userlogin, id, checkBox))
        // dispatch(listQuestions())
        setShowProgress(true)
        calculateTotal()
    }

    return (
        <Col md={4} className="mt-5">
            <Card>
                <Card.Header><img src={users && users[questions[id].author].avatarURL} className="img-fluid" style={{ width: '30px' }} alt="avatar" /> {questions && questions[id].author} </Card.Header>
                <Card.Body>
                    <Card.Title>Would You Rather</Card.Title>
                    <Form noValidate>
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
                    {!showProgress ?
                        (<Button variant="primary" className="my-3" disabled={checkBox === ''} onClick={handleSubmit}>Submit</Button>) :
                        (
                            <>
                                <p>Number of votes : {total}</p>
                            </>
                        )
                    }



                </Card.Body>
            </Card>
        </Col>
    )
}

export default QuestionDetails
