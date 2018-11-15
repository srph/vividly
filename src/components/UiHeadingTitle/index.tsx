import * as React from 'react'
import styled, { css }  from 'styled-components'

const ui = {} as any
ui.HeadingTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-bottom: 48px;

  ${(props: IUiHeadingTitleProps) => props.isCentered && css`
    text-align: center;
  `}
`
interface IUiHeadingTitleProps {
  text: string
  isCentered?: boolean
}

function UiContainer({ text, isCentered }: IUiHeadingTitleProps) {
  return (
    <ui.HeadingTitle isCentered={isCentered}>{text}</ui.HeadingTitle>
  )
}

export default UiContainer