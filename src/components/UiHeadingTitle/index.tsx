import * as React from 'react'
import styled, { css }  from 'styled-components'

const ui = {} as any
ui.HeadingTitle = styled.h2`
  font-size: 32px;
  font-weight: 800;
  margin-top: 0;
  margin-bottom: 48px;

  ${(props: IUiHeadingTitleProps) => props.isCentered && css`
    text-align: center;
  `}

  ${props => !props.spacer && css`
    margin-bottom: 0;
  `}
`
interface IUiHeadingTitleProps {
  text: string
  spacer?: boolean
  isCentered?: boolean
}

const UiHeadingTitle: React.SFC<IUiHeadingTitleProps> = ({ text, isCentered }: IUiHeadingTitleProps) => {
  return (
    <ui.HeadingTitle isCentered={isCentered}>{text}</ui.HeadingTitle>
  )
}

UiHeadingTitle.defaultProps = {
  spacer: true
}

export default UiHeadingTitle