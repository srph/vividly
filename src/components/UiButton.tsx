import * as React from 'react'
import styled, { css } from 'styled-components'
import s from '../styles'

const ui = {} as any
ui.Button = styled.button`
  display: inline-block;
  height: 26px;
  line-height: 25px;
  padding: 0 12px;
  font-weight: 600;
  font-family: ${s['font-family-heading']};
  font-size: 10px;
  text-transform: uppercase;
  color: ${s['color-white']};
  background: ${s['color-dirty-blue']};
  border: 0;
  border-radius: ${s['border-radius']}px;
  box-shadow: ${s['drop-shadow']};
  cursor: pointer;
  transform: translateY(0);
  transition: 200ms cubic-bezier(.06,.67,.37,.99) all;
  outline: 0;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props: IUiButtonProps) =>
    props.preset !== 'clear' &&
    css`
    &:not(:disabled):hover,
    :focus {
      transform: translateY(-4px);
      box-shadow: ${s['drop-shadow-lower']};
    }
  `}

  ${(props: IUiButtonProps) =>
    props.preset === 'clear' &&
    css`
    border: 0;
    color: ${s['color-dirty-blue']};
    box-shadow: initial;
    background: transparent;
  `}

  ${(props: IUiButtonProps) =>
    props.preset === 'default' &&
    css`
    color: ${s['color-dirty-blue']};
    background: transparent;
    border: 1px solid ${s['color-silver']};
  `}

  ${(props: IUiButtonProps) =>
    props.preset === 'primary' &&
    css`
    color: ${s['color-white']};
    background: ${s['color-lavender']};
  `}

  ${(props: IUiButtonProps) => props.isBlock && css`
    display: block;
    width: 100%;
  `}

  ${(props: IUiButtonProps) => props.size === 'md' && css`
    height: 40px;
    line-height: 39px;
  `}
`

interface IUiButtonProps {
  preset?: 'clear' | 'primary' | 'default'
  isBlock?: boolean
  size?: 'sm' | 'md' | 'lg'
  disabled?: boolean
}

const UiButton: React.SFC<IUiButtonProps> = (props: IUiButtonProps) => {
  return <ui.Button {...props} />
}

UiButton.defaultProps = {
  preset: 'clear',
  size: 'sm'
}

export default UiButton