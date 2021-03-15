import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import DashBoard from './screens/DashBoard'
import Login from './screens/Login'

const App = () => {

  const userLogin = useSelector((state) => state.userLogin)
  const { userlogin } = userLogin

  return (

    <Router>
      {userlogin ? <Header /> : null}
      <main>
        <Container className="mt-5">
          <Route path='/dashboard' component={DashBoard} />
          <Route path='/' component={Login} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
