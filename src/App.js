import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import DashBoard from './screens/DashBoard'
import Login from './screens/Login'

const App = () => {
  return (

    <Router>
      <Header />
      <main>
        <Container className="mt-5">
          <Route path='/login' component={Login} />
          <Route path='/' component={DashBoard} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
