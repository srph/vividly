import * as React from 'react'
import styled from 'styled-components'

const ui = {} as any
ui.Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
  padding: 0 16px;
`
ui.Section = styled.button`
  width: 33.33%;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  background: transparent;
  border: 0;
  outline: 0;
  color: #051350;
  cursor: pointer;

  &:nth-child(2) {
    justify-content: center;
  }

  &:nth-child(3) {
    justify-content: flex-end;
  }
`
ui.SectionIcon = styled.div`
  font-size: 24px;

  &:first-child {
    margin-right: 16px;
  }

  &:last-child {
    margin-left: 16px;
  }
`

interface IUiNavigationProps {
  index: number
  onChange: (navigationIndex: number) => void
  onScrollToActiveTime: () => void
}

export default class UiNavigation extends React.Component<IUiNavigationProps, {}> {
  render(): JSX.Element {
    return (
      <ui.Container>
        {this.props.index === 2 ? <ui.Section onClick={() => this.handleChange(-1)}>
          <ui.SectionIcon>
            <i className='fa fa-long-arrow-left' />
          </ui.SectionIcon>
          Day 1
        </ui.Section> : <ui.Section />}

        <ui.Section onClick={this.props.onScrollToActiveTime}>
          🌞
        </ui.Section>

        {this.props.index === 1 ? <ui.Section onClick={() => this.handleChange(1)}>
          Day 2
          <ui.SectionIcon>
            <i className='fa fa-long-arrow-right' />
          </ui.SectionIcon>
        </ui.Section> : <ui.Section />}
      </ui.Container>
    )
  }

  handleChange = (increment: number) => {
    this.props.onChange(this.props.index + increment)
  }
}