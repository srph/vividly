import * as React from 'react'
import styled, { keyframes } from 'styled-components'

const MOVEMENT = {
  small: 8,
  medium: 32
}

const MOVEMENT_DURATION = {
  small: 500,
  medium: 1000
}

enum Direction {
  Up = 'up',
  Down = 'down'
}

const kf = {} as any
kf.fadeIn = (props: { movement: 'small' | 'medium', direction: Direction.Up | Direction.Down }) =>
  keyframes`
    0% {
      opacity: 0;
      transform: translateY(${MOVEMENT[props.movement] * (props.direction === Direction.Up ? 1 : -1)}px);
    }

    100% {
      opacity: 1;
      transform: translateY(0);
    }
  `

const ui = {} as any
ui.Wrapper = styled.div`
  animation-name: ${(props: UiTransitionFadeInProps) => kf.fadeIn(props)};
  animation-duration: ${(props: any) => `${MOVEMENT_DURATION[props.movement]}`}ms;
  animation-timing-function: ease;
  animation-iteration-count: 1;
`

interface UiTransitionFadeInProps {
  direction?: 'up' | 'down'
  movement?: 'small' | 'medium'
  children: JSX.Element
}

const UiTransitionFadeIn: React.SFC<UiTransitionFadeInProps> = (props) => {
  return <ui.Wrapper direction={props.direction} movement={props.movement}>{props.children}</ui.Wrapper>
}

UiTransitionFadeIn.defaultProps = {
  direction: 'down',
  movement: 'medium'
}

export default UiTransitionFadeIn
