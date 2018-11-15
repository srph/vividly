import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import RouterNavLink from '@app/components/RouterNavLink'
import styled from 'styled-components'
import s from '@app/styles'
// import UiButton from '@app/components/UiButton'
import UiContainer from '@app/components/UiContainer'
// import UiHeadingTitle from '@app/components/UiHeadingTitle'

const ui = {} as any
ui.Navigation = styled.nav`
  margin-bottom: 48px;
  border-bottom: 1px solid #ddd;
`
ui.NavigationContainer = styled.div`
  display: flex;
  height: 50px;
  justify-content: space-between;
`
ui.NavigationHeading = styled.div`
  margin-right: 16px;
  font-weight: 800;
  font-size: 16px;
`
ui.NavigationSection = styled.div`
  display: flex;
  align-items: center;
`
ui.NavigationLink = styled(props => <RouterNavLink activeClassName="-active" {...props} />)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding-left: 16px;
  padding-right: 16px;
  color: ${s['color-dark-silver']};
  font-weight: 300;
  text-decoration: none;

  &.-active {
    color: ${s['color-dirty-blue']};
    font-weight: 500;
  }
`

interface IMainOrganizationScreenState {
  organization: {
    id: number
    name: string
  }
}

class MainOrganizationScreen extends React.Component<RouteComponentProps, IMainOrganizationScreenState> {
  state = {
    organization: {
      id: 1,
      name: 'Baby Powder'
    }
  }

  render() {
    return (
      <React.Fragment>
        <ui.Navigation>
          <UiContainer size="lg">
            <ui.NavigationContainer>
              <ui.NavigationSection>
                <ui.NavigationHeading>Powertext</ui.NavigationHeading>
                <ui.NavigationLink to="">Home</ui.NavigationLink>
                <ui.NavigationLink to="campaigns">Campaigns</ui.NavigationLink>
              </ui.NavigationSection>

              <ui.NavigationSection>
                <ui.NavigationLink to="/logout">Logout</ui.NavigationLink>
              </ui.NavigationSection>
            </ui.NavigationContainer>
          </UiContainer>
        </ui.Navigation>

        <UiContainer size="lg">
          {this.props.children}
        </UiContainer>
      </React.Fragment>
    )
  }
}

export default MainOrganizationScreen