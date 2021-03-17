import { waitForElementToBeRemoved } from '@testing-library/dom'
import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Question from '../components/Question'


const DashBoard = ({ history }) => {

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const questionList = useSelector((state) => state.questionList)
    const { loading: loadingQuestion, error: errorQuestion, questions } = questionList

    const userLogin = useSelector((state) => state.userLogin)
    const { userlogin } = userLogin

    const questionAnswer = useSelector((state) => state.questionAnswer)
    const { answeres } = questionAnswer


    const [unAnsweredQuestion, setUnAnsweredQuestion] = useState([])



    useEffect(() => {

        if (!userlogin) {
            let sign = window.confirm('please sign in first');
            if (sign) {
                history.push('/')
            }
        }

        if (questions) {
            setUnAnsweredQuestion(
                Object.keys(questions).filter(qid => !answeres.includes(qid)).sort((a, b) => questions[b].timestamp - questions[a].timestamp)
            )
        }

    }, [questions])




    return (

        <Tabs defaultActiveKey="unanswered" id="uncontrolled-tab-example">
            <Tab eventKey="unanswered" title="Unanswered">
                <Row>
                    {unAnsweredQuestion && unAnsweredQuestion.map(qId => (
                        questions && <Question key={qId} question={questions[qId]} />
                    ))}
                </Row>
            </Tab>
            <Tab eventKey="answered" title="Answered">
                <Row>
                    {answeres && answeres.map(qId => (
                        questions && <Question key={qId} question={questions[qId]} userAnswer={users[userlogin].answers[qId]} />
                    ))}
                </Row>
            </Tab>
        </Tabs>
    )
}

export default DashBoard
