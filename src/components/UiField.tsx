import * as React from 'react'
import styled, { css } from 'styled-components'
import s from '../styles'

interface UiFieldProps {
  id?: string
  label: string
  children: JSX.Element
  disabled?: boolean
  error?: string
  tooltip?: string
  actions?: JSX.Element | JSX.Element[]
  spacer?: boolean,
  wrapperRef?: (c: JSX.Element) => void
}

const ui = {} as any
ui.Field = styled.div`
  transition: 250ms all ease;

  ${props => props.spacer && css`
    margin-bottom: 16px;
  `}

  ${(props: { disabled: false }) =>
    props.disabled &&
    css`
    opacity: 0.5;
  `}
`
ui.Label = styled.label`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  font-weight: bold;
  font-family: ${s['font-family-heading']};
  font-size: 12px;
  margin-bottom: 8px;
  text-transform: uppercase;
`
ui.LabelError = styled.div`
  font-size: 10px;
  background: red;
  padding: 4px;
  color: ${s['color-white']};
`
ui.Tooltip = styled.div`
  margin-top: 12px;
  font-size: 10px;
  font-style: italic;
  color: ${s['color-dark-silver']};
`
ui.Actions = styled.div`
  display: flex;
  align-items: center;
`
ui.ActionsItem = styled.div`
  &:not(:last-child) {
    margin-right: 8px;
  }
`

export default function UiField(props: UiFieldProps) {
  const actions = props.actions ? (Array.isArray(props.actions) ? props.actions : [props.actions]) : []
  return (
    <ui.Field innerRef={props.wrapperRef} disabled={props.disabled} spacer={props.spacer}>
      <ui.Label htmlFor={props.id}>
        <span>{props.label}</span>
        {props.error && Boolean(props.error.length) && <ui.LabelError>Invalid JSON!</ui.LabelError>}
        {Boolean(actions.length) && (
          <ui.Actions>
            {actions.map((action, i) => (
              <ui.ActionsItem key={i}>
                {React.cloneElement(action, { disabled: action.props.disabled || props.disabled })}
              </ui.ActionsItem>
            ))}
          </ui.Actions>
        )}
      </ui.Label>
      {React.cloneElement(props.children, {
        id: props.id,
        disabled: props.disabled
      })}
      {props.tooltip && props.tooltip.length && <ui.Tooltip dangerouslySetInnerHTML={{ __html: props.tooltip }} />}
    </ui.Field>
  )
}
