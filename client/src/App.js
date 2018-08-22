import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootswatch/dist/materia/bootstrap.css'
import NavTop from './components/elements/NavTop'
import NavBottom from './components/elements/NavBottom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ProjectsPage from './pages/ProjectsPage'
import AppsPage from './pages/AppsPage'
import UIUXPage from './pages/UIUXPage'


class App extends Component {
  render () {
    return (
      <Router>
      <div>
        <NavTop />
        <Switch>
          <Route path='/' component={HomePage} />
          <Route path='/about' component={AboutPage} />
          <Route path='/projects' component={ProjectsPage} />
          <Route path='/projects/apps' component={AppsPage} />
          <Route path='/projects/ui-ux' component={UIUXPage} />
        </Switch>
        <NavBottom />
      </div>
    </Router>
    )
  }
}

export default App
