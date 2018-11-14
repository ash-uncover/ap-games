import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './_app.scss'

import GameRegistry from 'core/games/GameRegistry'

class App extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
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
          </Switch>
        </div>
      </main>
    )
  }
}

export default App
