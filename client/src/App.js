import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootswatch/dist/materia/bootstrap.css'
import NavTop from './components/elements/NavTop'
import NavBottom from './components/elements/NavBottom'
import HomePage from './pages/HomePage'


class App extends Component {
  render () {
    return (
      <Router>
      <div>
        <NavTop />
        <Switch>
          <Route path='/' component={HomePage} />
        </Switch>
        <NavBottom />
      </div>
    </Router>
    )
  }
}

export default App
