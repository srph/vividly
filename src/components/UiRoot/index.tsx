import * as React from 'react'
import { createGlobalStyle } from 'styled-components'
import s from '../styles'

const ui = {} as any
ui.Wrapper = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html, body {
    font-family: ${s['font-family']};
    font-size: ${s['font-size']};
    background: ${s['color-light-silver']};
    color: ${s['color-dirty-blue']};
  }
`
interface IUiRootProps {
  children: any
}

export default function UiRoot({ children }: IUiRootProps) {
  return (
    <ui.Wrapper>{children}</ui.Wrapper>
  )
}
