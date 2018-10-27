import * as React from 'react'
import styled from 'styled-components'
import s from '../styles'

const ui = {} as any
ui.Wrapper = styled.div`
  font-family: ${s['font-family']};
  font-size: ${s['font-size']};
  background: ${s['color-light-silver']};
  color: ${s['color-dirty-blue']};
  min-height: 100vh;
`
interface UiContainerProps {
  children: any
}

export default function UiContainer({ children }: UiContainerProps) {
  return (
    <ui.Wrapper>{children}</ui.Wrapper>
  )
}
