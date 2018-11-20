import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import AppHome from './AppHome'

import GameRegistry from 'core/games/GameRegistry'
import I18NHelper from 'utils-lib/i18n/I18NHelper'
import Helper from '../actions/AppActionsHelper'

import './_app.scss'

class App extends React.Component {
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
    if (this.props.loaded && !this.props.loading) {
      return this.renderDefault()
    }
    return this.renderLoading()
  }
  
  renderLoading () {
    return (
      <main className='app'>
      loading
      </main>
    )
  }
  
  renderDefault () {
    if (this.props.i18n) {
      I18NHelper.reset()
      I18NHelper.loadData(this.props.i18n.data)
    }
    return (
      <main className='app'>
        <Switch>
          {Object.keys(GameRegistry.GAMES).map((gameId) => (
            <Route
              path={`/${gameId}`}
              component={GameRegistry.GAMES[gameId].component} />
          ))}
          <Route path={`/`} component={AppHome} />
        </Switch>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  const { i18n } = state
  const { loaded, loading, loadingError } = state.app.data
  return {
    loaded,
    loading,
    loadingError,
    i18n
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onLoadData: () => { Helper.loadData(dispatch) }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
  null,
  { pure: false }
)(App)

export default AppContainer
