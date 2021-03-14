import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
import DashBoard from './screens/DashBoard'

const App = () => {
  return (

    <Router>
      <Header />
      <main>
        <Container className="mt-5">
          <DashBoard />
        </Container>
      </main>
    </Router>
  )
}

export default App
