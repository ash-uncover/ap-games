import React from 'react';

import MasterMindTile from 'components/games/mastermind/MasterMindTile.jsx';
import MasterMindHelper from 'components/games/mastermind/MasterMindHelper.js';

import './MasterMind.css'

class MasterMindColorPicker extends React.Component {

	constructor(props) {
		super(props);
	}

	_onSelect(value) {
		return function () {
			if (this.props.onSelect) {
				this.props.onSelect(value);
			}
		};
	}

	_buildColors() {
		return MasterMindHelper.getColors().map(function (color, i) {
			return (<MasterMindTile key={i} onClick={this._onSelect(color).bind(this)} color={color} />);
		}.bind(this));
	}

	render() { 
		return (
			<div className='mastermind-color-picker'>
				<div>
					{this._buildColors()}
				</div>
				<div>
					<button onClick={this.props.onCancel}>Annuler</button>
				</div>
			</div>
		);
	}
}

export default MasterMindColorPicker;
