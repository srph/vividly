import * as React from 'react'
import styled from 'styled-components'
import s from '../styles'

const ui = {} as any
ui.Input = styled.input`
  display: block;
  width: 100%;
  padding: 0 16px;
  height: 40px;
  line-height: 39px;
  background: transparent;
  color: ${s['color-dirty-blue']};
  border: 1px solid ${s['color-silver']};
  border-radius: ${s['border-radius']}px;
  outline: 0;
  // transition: 100ms box-shadow ease;

  &:focus {
    box-shadow: 0 0 0 3px ${s['color-dark-silver']};
  }

  ::placeholder {
    color: ${s['color-dark-silver']};
  }
`

interface UiInputProps {
  type?: string
  value?: string
  placeholder?: string
  onChange?: (input: string) => void
}

export default class UiInput extends React.Component<UiInputProps> {
  static defaultProps = {
    type: 'text'
  }

  render() {
    return (
      <ui.Input {...this.props} onChange={this.handleChange} />
    )
  }

  handleChange = (evt) => {
    this.props.onChange && this.props.onChange(evt.target.value)
  }
}
