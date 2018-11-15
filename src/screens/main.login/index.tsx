import * as React from 'react'
import { RouteComponentProps } from '@reach/router'
import UiContainer from '@app/components/UiContainer'
import UiField from '@app/components/UiField'
import UiInput from '@app/components/UiInput'
import UiButton from '@app/components/UiButton'
import linkState from 'linkstate'

class MainLoginScreen extends React.Component<RouteComponentProps> {
  state = {
    form: {
      username: '',
      password: ''
    }
  }

  render() {
    return (
      <UiContainer>
        <h4>Welcome Back!</h4>
        <UiField label="Username">
          <UiInput placeholder="Username" value={this.state.form.username} onChange={linkState(this, 'form.username')} />
        </UiField>

        <UiField label="Password">
          <UiInput type="password" placeholder="Username" value={this.state.form.username} onChange={linkState(this, 'form.password')} />
        </UiField>

        <UiButton>Sign In</UiButton>
      </UiContainer>
    )
  }
}

export default MainLoginScreen