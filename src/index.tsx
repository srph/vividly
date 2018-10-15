import './types';
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import 'sanitize.css'
import Preview from '@app/screens/preview'

class App extends React.Component<{}, {}> {
  render() {
    return (
      <Preview />
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
