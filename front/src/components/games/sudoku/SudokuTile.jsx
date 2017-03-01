import React from 'react';

import './Sudoku.css'

class SudokuTile extends React.Component {

	constructor(props) {
		super(props);
	}

	_onClick() {
		if (this.props.onTileSelect) {
			this.props.onTileSelect({
				x: this.props.x,
				y: this.props.y
			});
		}
	}

	render() { 
		let clazz = 'sudoku-tile';
		let onClick = this._onClick.bind(this);
		if (this.props.value.state === 'initial') {
			clazz += ' initial';
			onClick = null;
		}
		if (this.props.value.state === 'success') {
			clazz += ' success';
			onClick = null;
		}
		return (
			<div className={clazz} onClick={onClick}>
				{this.props.value.value ? this.props.value.value : ''}
			</div>
		);
	}
}

export default SudokuTile;
