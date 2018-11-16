import { RouteComponentProps } from '@reach/router'

export interface IUiDataTableState {
  loading: boolean,
  error: string,
  collection: {
    data: any[],
    from: number,
    to: number,
    total: number,
    current_page: number,
    last_page: number
  }
}

export interface IUiDataTableExternalProps {
  endpoint: string
  children: React.ReactNode
}

export type IUiDataTableRouteComponentProps = RouteComponentProps & {
  location: {
    query: {
      [id: string]: any
    }
  }
}

export interface IUiDataTableInternalProps extends IUiDataTableExternalProps {
  // router: IUiDataTableRouteComponentProps | null
  router: any
}

export interface IUiDataTableColumnProps {
  label: string
  children: (data: any, i: number) => JSX.Element
}