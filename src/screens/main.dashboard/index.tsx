import * as React from 'react'
import { RouteComponentProps, Redirect } from '@reach/router'
import styled from 'styled-components'
import s from '@app/styles'
import UiButton from '@app/components/UiButton'
import UiContainer from '@app/components/UiContainer'
import UiHeadingTitle from '@app/components/UiHeadingTitle'

const ui = {} as any
ui.ScreenPadding = styled.div`
  padding-top: 64px;
`
ui.OrgContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 90px;
`
ui.OrgContainerBall = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
  height: 48px;
  width: 48px;
  color: #fff;
  font-weight: 800;
  background: red;
  border-radius: 50%;
  font-size: 18px;
  background: ${s['color-lavender']};
  cursor: pointer;
  border: 0;
  outline: 0;
  transform: scale(1);
  transition: 200ms all ease;

  &:hover {
    transform: scale(1.2);
  }

  &:nth-child(2) {
    background: ${s['color-green']};
  }

  &:nth-child(3) {
    background: ${s['color-blue']};
  }
  
  &:not(:last-child) {
    margin-right: 16px;
  }
`
ui.OrgActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
ui.OrgActionsItem = styled.div`
  margin-right: 32px;
`

interface IMainDashboardScreenState {
  activeOrganizationIndex: number
}

class MainDashboardScreen extends React.Component<RouteComponentProps, IMainDashboardScreenState> {
  state = {
    activeOrganizationIndex: -1
  }

  render() {
    if (this.state.activeOrganizationIndex !== -1) {
      return <Redirect to={`/o/${this.state.activeOrganizationIndex}`} />
    }

    return (
      <ui.ScreenPadding>
        <UiContainer size="md">
          <UiHeadingTitle text="Select an organization" isCentered />

          <ui.OrgContainer>
            <ui.OrgContainerBall onClick={() => this.handleOpenOrganization(0)}>BS</ui.OrgContainerBall>
            <ui.OrgContainerBall onClick={() => this.handleOpenOrganization(1)}>MG</ui.OrgContainerBall>
            <ui.OrgContainerBall onClick={() => this.handleOpenOrganization(2)}>MC</ui.OrgContainerBall>
          </ui.OrgContainer>

          <ui.OrgActions>
            <ui.OrgActionsItem>
              <UiButton preset="default">My Account</UiButton>
            </ui.OrgActionsItem>

            <ui.OrgActionsItem>
              <UiButton>Logout</UiButton>
            </ui.OrgActionsItem>
          </ui.OrgActions>
        </UiContainer>
        </ui.ScreenPadding>
    )
  }

  handleOpenOrganization = (i: number) => {
    this.setState({ activeOrganizationIndex: i })
  }
}

export default MainDashboardScreen