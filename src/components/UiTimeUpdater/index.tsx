import * as React from 'react'

interface IUiTimeUpdaterProps {
  interval: number
  children: () => JSX.Element | JSX.Element[]
}

class UiTimeUpdater extends React.Component<IUiTimeUpdaterProps, {}> {
  interval?: number

  componentDidMount() {
    this.interval = window.setInterval(() => {
      this.forceUpdate()
    }, this.props.interval)
  }

  componentWillUnmount() {
    window.clearInterval(this.interval)
  }

  render() {
    return this.props.children()
  }
}

export default UiTimeUpdater