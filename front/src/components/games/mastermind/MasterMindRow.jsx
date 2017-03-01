import React from 'react';

import MasterMindTile from 'components/games/mastermind/MasterMindTile.jsx';
import MasterMindScore from 'components/games/mastermind/MasterMindScore.jsx';

import './MasterMind.css'

class MasterMindRow extends React.Component {

	constructor(props) {
		super(props);
	}

	_buildTiles() {
		return this.props.items.map(function (item, i) {
			return (
				<MasterMindTile 
					key={i}
					color={item} />
			);
		}.bind(this));
	}

	render() { 
		return (
			<div className='mastermind-row'>
				{this._buildTiles()}
				<MasterMindScore />
			</div>
		);
	}
}

export default MasterMindRow;
