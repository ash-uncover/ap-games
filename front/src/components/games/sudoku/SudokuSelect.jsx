import React from 'react';

import './Sudoku.css'

class SudokuSelect extends React.Component {

	constructor(props) {
		super(props);
	}

	_onSelect(value) {
		return function (event) {
			event.preventDefault();
			if (this.props.onValueSelect) {
				this.props.onValueSelect(value);
			}
		}.bind(this);
	}

	render() { 
		return (
			<div className='sudoku-select'>
				<div className='sudoku-select-row'>
					<button className='sudoku-select-item' onClick={this._onSelect(1)}>1</button>
					<button className='sudoku-select-item' onClick={this._onSelect(2)}>2</button>
					<button className='sudoku-select-item' onClick={this._onSelect(3)}>3</button>
				</div>
				<div className='sudoku-select-row'>
					<button className='sudoku-select-item' onClick={this._onSelect(4)}>4</button>
					<button className='sudoku-select-item' onClick={this._onSelect(5)}>5</button>
					<button className='sudoku-select-item' onClick={this._onSelect(6)}>6</button>
				</div>
				<div className='sudoku-select-row'>
					<button className='sudoku-select-item' onClick={this._onSelect(7)}>7</button>
					<button className='sudoku-select-item' onClick={this._onSelect(8)}>8</button>
					<button className='sudoku-select-item' onClick={this._onSelect(9)}>9</button>
				</div>
				<button onClick={this.props.onCancel}>Annuler</button>
			</div>
		);
	}
}

export default SudokuSelect;
