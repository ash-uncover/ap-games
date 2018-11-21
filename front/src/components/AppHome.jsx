import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import GameRegistry from 'core/games/GameRegistry'
import FullscreenHelper from 'utils-lib/FullscreenHelper'

import './_app.scss'

class AppHome extends React.Component {
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
      <div className='app-home'>
        <header className='app-toolbar'>
          <nav>
            <ul>
              Bienvenu
            </ul>
          </nav>
        </header>
        <div className='app-menu'>
        </div>
        <div className='app-content'>
          <section className='app-section'>
            <ul className='app-game-list'>
              {Object.keys(GameRegistry.GAMES).map((gameId) => (
                <li
                  key={gameId}
                  className='app-game-entry'>
                  <Link to={`/${gameId}`}>
                    <button onClick={this.onOpenGame}>
                      <img 
                        className=''
                        src={GameRegistry.GAMES[gameId].icon}
                        alt={GameRegistry.GAMES[gameId].name} />
                    </button>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AppHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHome)

export default AppHomeContainer
