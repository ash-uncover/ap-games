import React from 'react'

import DobbleCard from './DobbleCard'
import DobbleCard01 from './DobbleCard01'
import DobbleGame from './DobbleGame'

import './Dobble.scss'

class Dobble extends React.Component {

	constructor(props) {
		super(props)

		this.onClick = this._onClick.bind(this)
	}

	_onClick(cardId, symbolId) {
		console.log(...arguments)
	}

	render() { 
		return (
			<div className='dobble'>
				<DobbleCard {...DobbleGame.CARDS.CARD_01} onClick={this.onClick}/>
				<DobbleCard {...DobbleGame.CARDS.CARD_02} onClick={this.onClick}/>
				<DobbleCard01 onClick={this.onClick} />
				<DobbleCard01 />
			</div>
		)
	}
}

export default Dobble
