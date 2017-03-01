import React from 'react';

import MasterMind from 'components/games/mastermind/MasterMind.jsx';
import Sudoku from 'components/games/sudoku/Sudoku.jsx';

import './styles.css'

class App extends React.Component {

	constructor(props) {
		super(props);
	}

	render() { 
		return (
			<div className='app'>
				<MasterMind/>
			</div>
		);
	}
}

export default App;
