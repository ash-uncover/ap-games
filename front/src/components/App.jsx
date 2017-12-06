import React from 'react'

import './App.scss'

class App extends React.Component {

	constructor(props) {
		super(props)
	}

	render() { 
		return (
			<div className='app'>
				<div className='mainMenu'>
				</div>
				<div className='subMenu'>
				</div>
				<div className='mainContent'>
					{this.props.children}
				</div>
			</div>
		)
	}
}

export default App
