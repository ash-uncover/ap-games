import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Dispatcher from 'flux/core/Dispatcher'

import App from 'components/App'

import DobbleContainer from 'containers/dobble/DobbleContainer'
import MasterMind from 'components/games/mastermind/MasterMind'
import Pendu from 'components/games/pendu/Pendu'
import Sudoku from 'components/games/sudoku/Sudoku'

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
					<Route path='/dobble' component={DobbleContainer} />
                    <Route path='/mastermind' component={MasterMind} />
                    <Route path='/pendu' component={Pendu} />
                    <Route path='/sudoku' component={Sudoku} />
				</Route>
			</Router>
		);
	}
}

export default AppRouter;
