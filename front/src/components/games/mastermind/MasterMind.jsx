import React from 'react';

import MasterMindBoard from 'components/games/mastermind/MasterMindBoard.jsx';
import MasterMindColorPicker from 'components/games/mastermind/MasterMindColorPicker.jsx';
import MasterMindHelper from 'components/games/mastermind/MasterMindHelper.js';

import './MasterMind.css'

class MasterMind extends React.Component {

	constructor(props) {
		super(props);
		var secret = MasterMindHelper.newSecret();
		this.state = {
			secret: secret,
			item: null,
			current: [ null, null, null, null],
			history: [
				{ items: secret, colorOk: 1, itemOk: 1 }
			]
		};
	}

	onTileClick(item) {
		console.log(item)
		this.setState({ item: item });
	}

	onColorSelect(color) {
		this.state.current[this.state.item] = color;
		this.setState({ item: null });
	}

	onColorCancel() {
		this.setState({ item: null });
	}

	onRowValidate() {
		this.state.history.push({
			items: this.state.current
		});
		this.setState({ current: [ null, null, null, null] });
	}

	render() { 
		return (
			<div className='mastermind'>
				<MasterMindBoard 
					onRowValidate={this.onRowValidate.bind(this)}
					onTileClick={this.onTileClick.bind(this)}
					current={this.state.current} 
					history={this.state.history} 
					size={4}/>
				{this.state.item !== null ?
				<MasterMindColorPicker  
					onSelect={this.onColorSelect.bind(this)}
					onCancel={this.onColorCancel.bind(this)} />
				: ''}
			</div>
		);
	}
}

export default MasterMind;
