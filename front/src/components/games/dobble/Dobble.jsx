import React from 'react'

import DobbleCard from './DobbleCard'
import DobbleGame from 'game-data/dobble/DobbleGame'

import './Dobble.scss'

class Dobble extends React.Component {

	constructor(props) {
		super(props)

		this.onClick = this._onClick.bind(this)
        this.state = { label: '' }
	}

	_onClick(cardId, symbolId) {
		this.setState({ label: DobbleGame.SYMBOLS[symbolId].name})
	}

	render() { 
		return (
			<div className='dobble'>
                <div>
    				<DobbleCard onClick={this.onClick} {...DobbleGame.CARDS[0]} />
                </div>
                <div>
                    {this.state.label}
                </div>
			</div>
		)
	}
}

export default Dobble
