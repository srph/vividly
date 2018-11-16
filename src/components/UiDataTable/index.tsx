import * as React from 'react'
import { Match } from '@reach/router'
import { IUiDataTableExternalProps } from './types'
import DataTable from './DataTable'
import Column from './Column'

const UiDataTable: React.SFC<IUiDataTableExternalProps> & { Column?: any } = (props) => {
  return (
    <Match path="*">
      {matchProps => (
        <DataTable {...props} router={matchProps.match} />
      )}
    </Match>
  )
}

UiDataTable.Column = Column

export default UiDataTable