import React from 'react'
import { connect } from 'react-redux'
import { Link, Switch, Route } from 'react-router-dom'

import AppHome from './AppHome'

import GameRegistry from 'core/games/GameRegistry'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_app.scss'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    if (this.props.data) {
      I18NHelper.reset()
      I18NHelper.loadData(this.props.data)
    }
    //console.log(this.props.data)
    return (
      <main className='app'>
        <header className='mainMenu'>
          <nav>
            <ul>
              {Object.keys(GameRegistry.GAMES).map((gameId) => (
                <li><Link to={`/${gameId}`}>{GameRegistry.GAMES[gameId].name}</Link></li>
              ))}
            </ul>
          </nav>
        </header>
        <div className='subMenu' />
        <div className='mainContent'>
          <Switch>
            {Object.keys(GameRegistry.GAMES).map((gameId) => (
              <Route path={`/${gameId}`} component={GameRegistry.GAMES[gameId].component} />
            ))}
            <Route path={`/`} component={AppHome} />
          </Switch>
        </div>
      </main>
    )
  }
}

const mapStateToProps = (state) => {
  const { data } = state.i18n
  return {
    data
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
