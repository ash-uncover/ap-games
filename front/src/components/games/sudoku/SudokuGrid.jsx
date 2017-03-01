import React from 'react';

import SudokuSubGrid from 'components/games/sudoku/SudokuSubGrid.jsx';

import './Sudoku.css'

class SudokuGrid extends React.Component {

	constructor(props) {
		super(props);
	}

	_buildRows() {
		return [0, 1, 2].map(function (i) {
			return (
				<div key={i}>
					{this._buildSubGrids(i)}
				</div>
			);
		}.bind(this));
	}

	_buildSubGrids(i) {
		return [0, 1, 2].map(function (j) {
			return (
				<SudokuSubGrid 
					x={i}
					y={j}
					key={j}
					values={this._buildValues(i, j)}
					onTileSelect={this.props.onTileSelect}/>
			);
		}.bind(this));
	}

	_buildValues(i, j) {
		let i3 = 3*i;
		let j3 = 3*j;
		let v = this.props.values;
		let result = [];
		for (let k = 0; k < 3; k++) {
			let r = [];
			for (let l = 0; l < 3; l++) {
				r.push(v[i3 + k][j3 + l]);
			}
			result.push(r);
		}
		return result;
	}

	render() { 
		return (
			<div className='sudoku-grid'>
				{this._buildRows()}
			</div>
		);
	}
}

export default SudokuGrid;
