import React from 'react'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import Dispatcher from 'flux/core/Dispatcher.js';
import App from 'components/App.jsx';

import './styles.css'

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
		//Dispatcher.issue('ROUTER_CHANGED', params);
	}

	render() {
		return (
			<Router history={browserHistory}>
				<Route path='/' component={App} onEnter={this.onRouteEnter}/>
			</Router>
		);
	}
}

export default AppRouter;
