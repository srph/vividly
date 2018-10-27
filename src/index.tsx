import './types';
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'sanitize.css'
import Index from '@app/screens/index'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Index />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
