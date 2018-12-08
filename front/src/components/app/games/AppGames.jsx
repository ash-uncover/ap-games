import React from 'react'
import { connect } from 'react-redux'

import AppGame from './AppGame'

import GameRegistry from 'core/games/GameRegistry'

import { FullscreenHelper, I18NHelper } from 'utils-lib'

import './_app-games.scss'

class AppGames extends React.Component {
  constructor (props) {
    super(props)
  }

  /* VIEW CALLBACKS */

  onOpenGame () {
    FullscreenHelper.requestFullscreen(document.documentElement)
  }

  /* RENDERING */

  render () {
    return (
      <section className='app-games'>
        <ul className='app-games-list'>
          {Object.keys(GameRegistry.GAMES).map((gameId) => (
            <AppGame gameId={gameId} />
          ))}
        </ul>
      </section>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AppGamesContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppGames)

export default AppGamesContainer
