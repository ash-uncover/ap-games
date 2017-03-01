import React from 'react';

import SudokuBoard from 'components/games/sudoku/SudokuBoard.jsx';
import SudokuSelect from 'components/games/sudoku/SudokuSelect.jsx';

import SudokuHelper from 'components/games/sudoku/SudokuHelper.js';

import './Sudoku.css'

class Sudoku extends React.Component {

	constructor(props) {
		super(props);
		this.state = new SudokuHelper('000260001601075803020000000106000005495103786800000409000000050204630107900012000');
		this.state.item = null;
	}

	onTileSelect(item) {
		this.setState({ item: item });
	}

	onCancelSelect(item) {
		this.setState({ item: null });
	}

	onValueSelect(value) {
		this.state.values[this.state.item.x][this.state.item.y].value = value;
		SudokuHelper.checkGrid(this.state.values);
		this.setState({ 
			item: null,
			values: this.state.values 
		});
	}

	render() { 
		return (
			<div className='sudoku'>
				<SudokuBoard 
					values={this.state.values}
					onTileSelect={this.onTileSelect.bind(this)}/>
				{this.state.item ?
				<SudokuSelect 
					onValueSelect={this.onValueSelect.bind(this)}
					onCancel={this.onCancelSelect.bind(this)} />
				: ''}
			</div>
		);
	}
}

export default Sudoku;
