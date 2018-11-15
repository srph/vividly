import * as React from 'react'
import { RouteComponentProps, Redirect } from '@reach/router'
import styled from 'styled-components'
import UiField from '@app/components/UiField'
import UiInput from '@app/components/UiInput'
import UiButton from '@app/components/UiButton'
import UiHeadingTitle from '@app/components/UiHeadingTitle'
import linkState from 'linkstate'

const ui = {} as any
ui.LoginContainer = styled.div`
  padding: 16px;
  padding-top: 64px;
  margin: 0 auto;
  width: 320px;
`
ui.LoginHeading = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 48px;
  text-align: center;
`

class MainLoginScreen extends React.Component<RouteComponentProps> {
  state = {
    form: {
      username: '',
      password: ''
    },
    isAuthenticated: false
  }

  render() {
    if (this.state.isAuthenticated) {
      return <Redirect to="/" />
    }

    return (
      <ui.LoginContainer>
        <UiHeadingTitle text="Welcome Back!" isCentered />

        <form onSubmit={this.handleSubmit}>
          <UiField label="Username" spacer>
            <UiInput placeholder="john@doe.com" value={this.state.form.username} onChange={linkState(this, 'form.username')} />
          </UiField>

          <UiField label="Password" spacer>
            <UiInput type="**********" placeholder="Username" value={this.state.form.username} onChange={linkState(this, 'form.password')} />
          </UiField>

          <UiButton size="md" preset="primary" isBlock>Sign In</UiButton>
        </form>
      </ui.LoginContainer>
    )
  }

  handleSubmit = (evt) => {
    evt.preventDefault()
    this.setState({ isAuthenticated: true })
  }
}

export default MainLoginScreen