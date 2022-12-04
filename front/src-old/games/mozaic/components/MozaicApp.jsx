import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import MozaicHome from './MozaicHome'
import MozaicGame from './game/MozaicGame'

import Helper from '../actions/MozaicActionsHelper'

import './_mozaic.scss'

class MozaicApp extends React.Component {
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
    const url = this.props.match.url
    return (
      <div className='mozaic'>
        <Switch>
          <Route path={url + '/game'} component={MozaicGame} />
          <Route path={url + '/'} component={MozaicHome} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { loaded, loading, loadingError } = state.mozaic.data
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

export default connect(mapStateToProps, mapDispatchToProps)(MozaicApp)
