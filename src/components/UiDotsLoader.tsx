import * as React from 'react'
import styled, {keyframes} from 'styled-components'
import s from '../styles'

const kf: any = {} as any
kf.fadeDelay = keyframes`
  0% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-16px);
  }

  80% {
    transform: translateY(4px);
  }

  100% {
    transform: translateY(0);
  }
`

const ui: any = {} as any
ui.Wrapper = styled.div`
  margin-left: auto;
  margin-right: auto;
  text-align: center;
`
ui.Dots = styled.div`
  width: 8px;
  height: 8px;
  background-color: ${s['color-dirty-blue']};
  border-radius: 50%;
  display: inline-block;
  animation: ${kf.fadeDelay} 1s infinite ease-in-out;
  animation-fill-mode: both;

  :nth-child(2) {
    animation-delay: 0.32s;
  }

  :nth-child(3) {
    animation-delay: 0.48s;
  }

  &:not(:last-child) {
    margin-right: 8px;
  }
`

export default function UiDotsLoader() {
  return <ui.Wrapper><ui.Dots /><ui.Dots /><ui.Dots /></ui.Wrapper>
}