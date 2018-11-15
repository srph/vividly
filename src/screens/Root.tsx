import * as React from 'react'
import { Router } from '@reach/router'
import UiRoot from '@app/components/UiRoot'
import MainLogin from './main.login'
import MainDashboard from './main.dashboard'

class Root extends React.Component {
  render() {
    return (
      <UiRoot>
        <Router>
          <MainLogin path="/login" />
          <MainDashboard path="/" />
        </Router>
      </UiRoot>
    )
  }
}

export default Root