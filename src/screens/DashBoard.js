import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Question from '../components/Question'
import { listUsers, login } from '../actions/userActions'
import { listQuestions } from '../actions/questionActions'

const DashBoard = () => {

    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList
    console.log('usersxxxx', users)


    const questionList = useSelector((state) => state.questionList)
    const { loading: loadingQuestion, error: errorQuestion, questions } = questionList

    const userLogin = useSelector((state) => state.userLogin)
    const { userlogin } = userLogin
    console.log('userlogin', userlogin)




    useEffect(() => {
        dispatch(listUsers())
        dispatch(listQuestions())
    }, [dispatch])

    return (

        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
            <Tab eventKey="unanswered" title="Unanswered">
                <Row>
                    {users && users[userlogin]?.questions.map(qId => (
                        questions && <Question key={qId} question={questions[qId]} />
                    ))}
                </Row>
            </Tab>
            <Tab eventKey="answered" title="Answered">
                <Row>
                    <Question />
                </Row>
            </Tab>
        </Tabs>
    )
}

export default DashBoard
