import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import DefaultHome from './DefaultHome3'

import Helper from '../actions/DefaultActionsHelper'

import './_default.scss'

class DefaultApp extends React.Component {
  constructor (props) {
    super(props)
  }

  /* LIFECYCLE */

  componentWillMount() {
    this.checkLoad({
      loaded: this.props.loaded,
      loading: this.props.loading,
      loadingError: this.props.loadingError
    })
  }

  componentWillReceiveProps(props) {
      this.checkLoad(props)
  }

  checkLoad(args) {
    if(!args.loaded && !args.loading && !args.loadingError) {
      this.props.onLoadData()
    }
  }

  /* RENDERING */

  render () {
    console.log('render defaultapp')
    const url = this.props.match.url
    return (
      <div className='default'>
        <Switch>
          <Route path={url + '/'} component={DefaultHome} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loaded, loading, loadingError } = state.default.data
  return {
    loaded,
    loading,
    loadingError
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: () => { Helper.loadData(dispatch) }
  }
}

const DefaultAppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultApp)

export default DefaultAppContainer
