import React from 'react'
import { Link, Switch, Route } from 'react-router-dom'
import './App.scss'

import DobbleContainer from 'containers/dobble/DobbleContainer'
import MasterMind from 'components/games/mastermind/MasterMind'
import Pendu from 'components/games/pendu/Pendu'
import Sudoku from 'components/games/sudoku/Sudoku'

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() { 
		return (
            <main className='app'>
                <header className='mainMenu'>
                    <nav>
                        <ul>
                            <li><Link to='/dobble'>Dobble</Link></li>
                            <li><Link to='/mastermind'>Master Mind</Link></li>
                            <li><Link to='/pendu'>Pendu</Link></li>
                            <li><Link to='/sudoku'>Soduku</Link></li>
                        </ul>
                    </nav>
                </header>
                <div className='subMenu'>
                </div>
                <div className='mainContent'>
                    <Switch>
                        <Route path='/dobble' component={DobbleContainer} />
                        <Route path='/mastermind' component={MasterMind} />
                        <Route path='/pendu' component={Pendu} />
                        <Route path='/sudoku' component={Sudoku} />
                    </Switch>
                </div>
            </main>
		)
	}
}

export default App
