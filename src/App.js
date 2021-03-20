import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import DashBoard from './screens/DashBoard'
import Login from './screens/Login'
import QuestionDetails from './screens/QuestionDetails'
import NewQuestion from './screens/NewQuestion'
import LeaderBoard from './screens/LeaderBoard'
import NotFound from './screens/NotFound'
import NotLogin from './screens/NotLogin'

const App = () => {

  const userLogin = useSelector((state) => state.userLogin)
  const { userlogin } = userLogin

  return (

    <Router>
      <Header />
      <main>
        <Container className="mt-5">

          {userlogin ? (
            <Switch>
              <Route path='/questiondetails/:id' component={QuestionDetails} />
              <Route path='/leaderboard' component={LeaderBoard} />
              <Route path='/new' component={NewQuestion} />
              <Route path='/dashboard' component={DashBoard} />
              <Route path='/' component={Login} exact />
              <Route path='*' component={NotFound} />
            </Switch>

          ) : (
            <Switch>
              <Route path='/' component={Login} exact />
              <Route path='*' component={NotLogin} />
            </Switch>
          )}
        </Container>
      </main>
    </Router>
  )
}

export default App
