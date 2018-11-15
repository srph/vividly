import * as React from 'react'
import { Router } from '@reach/router'
import UiRoot from '@app/components/UiRoot'
import MainLogin from './main.login'
import MainDashboard from './main.dashboard'
import MainOrganization from './main.organization'
import MainOrganizationCampaigns from './main.organization.campaigns'

class Root extends React.Component {
  render() {
    return (
      <UiRoot>
        <Router>
          <MainOrganization path="/o/:organizationId">
            <MainOrganizationCampaigns path="campaigns" />
          </MainOrganization>
          <MainLogin path="/login" />
          <MainDashboard path="/" />
        </Router>
      </UiRoot>
    )
  }
}

export default Root