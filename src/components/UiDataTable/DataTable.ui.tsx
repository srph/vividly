// import * as React from 'react'
import styled, { css } from 'styled-components'

const ui = {} as any
ui.Heading = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-dirty-white);
  border-radius: var(--border-radius);

  :not(:last-child) {
    margin-bottom: 4px;
  }

  :not(:last-child) {
    margin-bottom: 4px;
  }
`
ui.HeadingColumn = styled.div`
  width: 100%;
  font-size: 16px;
  font-weight: bold;
  padding: 24px 0;
`
ui.BodyRow = styled.div`
  display: flex;
  align-items: center;
  background: var(--color-dirty-white);
  border-radius: var(--border-radius);

  :not(:last-child) {
    margin-bottom: 4px;
  }
`
ui.BodyRowColumn = styled.div`
  width: 100%;
  padding: 24px 0;
`
ui.Paginator = styled.div`
  display: flex;
  margin-top: 32px;
`
ui.PaginatorContent = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  color: var(--color-gray );
`
ui.PaginatorContentNavigator = styled.nav`
  display: flex;
`
ui.PaginatorContentNavigatorAction = styled.div`
  :first-child {
    margin-right: 16px;
  }

  ${props => props.isDisabled && css`
    opacity: 0.6
  `}
`
ui.PaginatorContentInfo = styled.div`
  margin-right: 32px;
`
// ui.PaginatorContentPerpage = styled.div`
//   display: flex;
//   align-items: center;
//   margin-right: 32px;
// `
// ui.PaginatorContentPerpageLabel = styled.div`
//   .paginator > .content > .perpage > .label {
//     margin-right: 8px;
//   }
// `
// ui.PaginatorContentPerpageSelect = styled.div`
// .paginator > .content > .perpage > .select {
//   display: block;
//   width: 64px;
//   padding-top: 8px;
//   padding-bottom: 8px;
//   padding-left: 0;
//   padding-right: 16px;
//   color: var(--color-gray);
//   border: 0;
//   border-bottom: 1px solid var(--color-gray);
//   background: transparent;
// }

export default ui