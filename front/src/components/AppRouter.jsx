import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Dispatcher from 'flux/core/Dispatcher'

import App from 'components/App'

import MasterMind from 'components/games/mastermind/MasterMind'
import Sudoku from 'components/games/sudoku/Sudoku'
import Dobble from 'components/games/dobble/Dobble'

class AppRouter extends React.Component {

	constructor(props) {
		super(props);
	}

	onRouteEnter(event) {
		let params = {
			route: {
				path: event.location.pathname

			}
		};
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={App} onEnter={this.onRouteEnter}>
					<Route path='/mastermind' component={MasterMind} />
					<Route path='/sudoku' component={Sudoku} />
					<Route path='/dobble' component={Dobble} />
				</Route>
			</Router>
		);
	}
}

export default AppRouter;
