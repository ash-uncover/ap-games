import React from 'react'
import { Link } from 'react-router-dom'

import GameRegistry from 'core/games/GameRegistry'

import { FullscreenHelper } from 'utils-lib'

import './_app-games.scss'

class AppGame extends React.Component {
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
      <li className='app-game'>
        <Link to={`/${this.props.gameId}`}>
          <button onClick={this.onOpenGame}>
            <img 
              className=''
              src={GameRegistry.GAMES[this.props.gameId].icon}
              alt={GameRegistry.GAMES[this.props.gameId].name} />
          </button>
        </Link>
      </li>
    )
  }
}

export default AppGame
