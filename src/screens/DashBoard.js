import React, { useEffect, useState } from 'react'
import { Tabs, Tab, Row } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Question from '../components/Question'


const DashBoard = () => {

    const userList = useSelector((state) => state.userList)
    const { loading, error, users } = userList

    const questionList = useSelector((state) => state.questionList)
    const { loading: loadingQuestion, error: errorQuestion, questions } = questionList
    // console.log('questionskolo', questions)

    const userLogin = useSelector((state) => state.userLogin)
    const { userlogin } = userLogin

    const [answeredQuestion, setAnsweredQuestion] = useState([])
    console.log('answeredQuestion', answeredQuestion)

    const [unAnsweredQuestion, setUnAnsweredQuestion] = useState([])
    console.log('unAnsweredQuestion', unAnsweredQuestion)




    useEffect(() => {

        setAnsweredQuestion(
            Object.keys(users[userlogin].answers).map(qid => qid)
        )

        setUnAnsweredQuestion(
            Object.keys(questions).filter(qid => !answeredQuestion.includes(qid))
        )

    }, [])




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
                    {answeredQuestion && answeredQuestion.map(qId => (
                        questions && <Question key={qId} question={questions[qId]} />
                    ))}
                </Row>
            </Tab>
        </Tabs>
    )
}

export default DashBoard
