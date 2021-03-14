import React, { useEffect } from 'react'
import { Tabs, Tab, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Question from '../components/Question'
import { listUsers } from '../actions/userActions'
import { listQuestions } from '../actions/questionActions'

const DashBoard = () => {

    const dispatch = useDispatch()

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList


    const questionList = useSelector((state) => state.questionList)
    const { loading: loadingQuestion, error: errorQuestion, questions } = questionList


    useEffect(() => {
        dispatch(listUsers())
        dispatch(listQuestions())
    }, [dispatch])

    return (

        <Tabs defaultActiveKey="answered" id="uncontrolled-tab-example">
            <Tab eventKey="answered" title="Answered">
                <Row>
                    <Question />
                </Row>
            </Tab>
            <Tab eventKey="unanswered" title="Unanswered">
                <Row>
                    <Question />
                </Row>
            </Tab>
        </Tabs>
    )
}

export default DashBoard
