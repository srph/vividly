import './types';
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'sanitize.css'
// import Main from '@app/screens/main'
import Day1 from '@app/screens/day1'
import Day2 from '@app/screens/day2'

interface IAppState {
  navigationIndex: number
}

class App extends React.Component<{}, IAppState> {
  state: IAppState = {
    navigationIndex: 2
  }

  render(): JSX.Element | boolean {
    const { navigationIndex } = this.state
    
    if (navigationIndex === 1) {
      return <Day1 onNavigationChange={this.handleNavigationChange} />
    } else if (navigationIndex === 2) {
      return <Day2 onNavigationChange={this.handleNavigationChange} />
    }

    return false
  }

  handleNavigationChange = (navigationIndex: number) => {
    this.setState({
      navigationIndex
    })
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
