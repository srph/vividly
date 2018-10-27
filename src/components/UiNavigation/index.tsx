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
  display: flex;
  align-items: center;
  background: transparent;
  border: 0;
  outline: 0;
  color: #051350;
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
}

export default class UiNavigation extends React.Component<IUiNavigationProps, {}> {
  render(): JSX.Element {
    return (
      <ui.Container>
        <ui.Section onClick={() => this.handleChange(-1)}>
          <ui.SectionIcon>
            <i className='fa fa-long-arrow-left' />
          </ui.SectionIcon>
        </ui.Section>

        {this.props.index === 1 && <ui.Section onClick={() => this.handleChange(1)}>
          Next
          <ui.SectionIcon>
            <i className='fa fa-long-arrow-right' />
          </ui.SectionIcon>
        </ui.Section>}
      </ui.Container>
    )
  }

  handleChange = (increment: number) => {
    this.props.onChange(this.props.index + increment)
  }
}