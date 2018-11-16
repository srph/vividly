import * as React from 'react'
import styled from 'styled-components'

const ui = {} as any
ui.PlainButton = styled.button`
  display: inline-block;
  padding: 0;
  border: 0;
  color: inherit;
  outline: 0;
  cursor: pointer;
`

const UiPlainButton: React.SFC<any> = (props) => {
  return (
    <ui.PlainButton {...props} />
  )
}

export default UiPlainButton