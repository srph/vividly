import * as React from 'react'
import { Router } from '@reach/router'
import MainLogin from './main.login'
import MainDashboard from './main.dashboard'

class Root extends React.Component {
  render() {
    return (
      <Router>
        <MainLogin path="/login" />
        <MainDashboard path="/" />
      </Router>
    )
  }
}

export default Root