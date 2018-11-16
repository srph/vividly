import * as React from 'react'
import UiPlainButton from '@app/components/UiPlainButton'

import axios from 'axios'
// import shallow from 'is-equal-shallow'
// import qs from 'querystring'
// import { navigate } from '@reach/router'
import { IUiDataTableInternalProps, IUiDataTableState, IUiDataTableColumnProps } from './types'

import ui from './DataTable.ui'

class UiDataTable extends React.Component<IUiDataTableInternalProps, IUiDataTableState> {
  state = {
    loading: false,
    error: '',
    collection: {
      data: [{}],
      from: 0,
      to: 0,
      total: 0,
      current_page: 0,
      last_page: 0
    }
  }

  componentDidMount() {
    // this.request(this.props)
  }

  componentWillReceiveProps(nextProps: IUiDataTableInternalProps) {
    // if (this.props.endpoint !== nextProps.endpoint || !shallow(this.props.router.location.query, nextProps.router.location.query)) {
    //   this.request(nextProps)
    // }
  }

  render() {
    // const {children, location} = this.props
    const {children} = this.props
    const {collection} = this.state

    return (
      <div className='data-table'>
        <ui.Heading>
          {React.Children.map(children, (child: React.ReactElement<IUiDataTableColumnProps>, i) =>
            <ui.HeadingColumn key={i}>
              {child.props.label}
            </ui.HeadingColumn>
          )}
        </ui.Heading>

        <div className='body'>
          {collection.data.map((row, i) =>
            <ui.BodyRow key={i}>
              {React.Children.map(children, (child: React.ReactElement<IUiDataTableColumnProps>, j) =>
                <ui.BodyRowColumn key={j}>
                  {child.props.children(row, i)}
                </ui.BodyRowColumn>
              )}
            </ui.BodyRow>
          )}
        </div>

        {collection.last_page !== 1 && (
          <ui.Paginator>
            <ui.PaginatorContent>
              {/* <div className='perpage'>
                <label className='label'>
                  Items per page
                </label>

                <select className='select'
                  value={Number(location.query.per_page) || collection.per_page}
                  onChange={this.handleChangePerPage}>
                  <option value={15}>15</option>
                  <option value={30}>30</option>
                  <option value={45}>45</option>
                  <option value={60}>60</option>
                </select>
              </div> */}

              <ui.PaginatorContentInfo>
                {collection.from} - {collection.to} of {collection.total}
              </ui.PaginatorContentInfo>

              <ui.PaginatorContentNavigator>
                <ui.PaginatorContentNavigatorAction isDisabled={collection.current_page === 1}>
                  <UiPlainButton disabled={collection.current_page === 1}
                    onClick={this.handlePrevious}>
                    <i className='fa fa-chevron-left' />
                  </UiPlainButton>
                </ui.PaginatorContentNavigatorAction>

                <ui.PaginatorContentNavigatorAction isDisabled={collection.current_page === collection.last_page}>
                  <UiPlainButton disabled={collection.current_page === collection.last_page}
                    onClick={this.handleNext}>
                    <i className='fa fa-chevron-right' />
                  </UiPlainButton>
                </ui.PaginatorContentNavigatorAction>
              </ui.PaginatorContentNavigator>
            </ui.PaginatorContent>
          </ui.Paginator>
        )}
      </div>
    )
  }

  request(props = this.props) {
    this.setState({
      loading: true
    })

    axios.get(`${props.endpoint}`, {
      params: {
        ...props.router.location.query,
        // ...props.query,
        page: props.router.location.query.page || 1,
        paginate: props.router.location.query.per_page || 15,
      }
    }).then(res => {
      this.setState({
        loading: false,
        collection: res.data.data
      })
    }, err => {
      this.setState({
        loading: false
      })
    })
  }

  /**
   * Refresh the table's data.
   * Useful when removing an entry from the table
   */
  refresh = () => {
    this.request()
  }

  handleNext = () => {
    // const {location} = this.props.router
    
    // naviga  te({
    //   ...location,
    //   query: { ...location.query, page: Number((location.query.page || 1)) + 1 }
    // })
  }

  handlePrevious = () => {
    // const {location} = this.props.router

    // navigate({
    //   ...location,
    //   query: { ...location.query, page: Number((location.query.page || 1)) - 1 }
    // })
  }

  handleChangePerPage = evt => {
    // const {location} = this.props.router

    // navigate({
    //   ...location,
    //   query: { ...location.query, per_page: evt.target.value, page: 1 }
    // })
  }
}

export default UiDataTable