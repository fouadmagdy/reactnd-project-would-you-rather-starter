import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { saveQuestions } from '../actions/questionActions'
import { Col, Card, Button, Form } from 'react-bootstrap'

const QuestionDetails = ({ match, location }) => {

    const id = match.params.id

    const isAnswered = location.search ? location.search.split('=')[1] : false

    const dispatch = useDispatch()
    const userLogin = useSelector((state) => state.userLogin)
    const { userlogin } = userLogin

    const [checkBox, setCheckBox] = useState('')
    const [total, setTotal] = useState(0)
    const [percOne, setPercOne] = useState(0)
    const [percTwo, setPercTwo] = useState(0)

    const questionList = useSelector((state) => state.questionList)
    const { questions } = questionList

    const userList = useSelector((state) => state.userList)
    const { users } = userList
    const [showProgress, setShowProgress] = useState(false)




    const calculateTotal = () => {
        setTotal(questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length);
    }

    function financial(x) {
        return +Number.parseFloat(x).toFixed(2);
    }


    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(saveQuestions(userlogin, id, checkBox))
        setShowProgress(true)
        calculateTotal()
    }

    useEffect(() => {

        if (isAnswered === 'optionOne' || isAnswered === 'optionTwo') {
            setShowProgress(true)
            calculateTotal()
        }

        setPercOne(financial((questions[id].optionOne.votes.length / +total) * 100))
        setPercTwo(financial((questions[id].optionTwo.votes.length / +total) * 100))
    }, [questions, id, total, calculateTotal, isAnswered])

    return (
        <Col md={4} className="mt-5">
            <Card>
                <Card.Header><img src={users && users[questions[id].author].avatarURL} className="img-fluid" style={{ width: '30px' }} alt="avatar" /> {questions && questions[id].author} </Card.Header>
                <Card.Body>
                    <Card.Title>Would You Rather</Card.Title>
                    {isAnswered === 'optionOne' || isAnswered === 'optionTwo' ? (
                        <Form noValidate>
                            <Form.Check
                                type='radio'
                                id='questionone'
                                label={questions[id].optionOne.text}
                                name='answerquestion'
                                value="optionOne"
                                checked={isAnswered === 'optionOne'}
                                onChange={(e) => setCheckBox(e.target.value)}
                            />
                            <Form.Check
                                type='radio'
                                id='questiontwo'
                                label={questions[id].optionTwo.text}
                                name='answerquestion'
                                value="optionTwo"
                                checked={isAnswered === 'optionTwo'}
                                onChange={(e) => setCheckBox(e.target.value)}
                            />
                        </Form>
                    ) : (
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
                    )}
                    {!showProgress ?
                        (<Button variant="primary" className="my-3" disabled={checkBox === ''} onClick={handleSubmit}>Submit</Button>) :
                        (
                            <>
                                <div className="progress">
                                    <div className="progress-one bg-primary" style={{ width: `${percOne}%` }}>{`${percOne}%`}</div>
                                    <div className="progress-two bg-warning" style={{ width: `${percTwo}%` }}>{`${percTwo}%`}</div>
                                </div>
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
