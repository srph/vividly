import * as React from 'react'
import s from '@app/styles'
import styled from 'styled-components'

const ui = {} as any
ui.Label = styled.span`
  display: inline-block;
  padding: 4px 8px;
  font-size: 11px;
  text-transform: uppercase;
  border-radius: 4px;
  font-weight: bold;
  background: ${s['color-silver']};
`

function UiLabel(props: any) {
  return (
    <ui.Label>{props.children}</ui.Label>
  )
}

export default UiLabel