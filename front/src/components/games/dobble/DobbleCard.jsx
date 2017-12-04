import React from 'react'
import PropTypes from 'prop-types'

import DobbleSymbol from './DobbleSymbol.jsx'

import './Dobble.scss'

export default class DobbleCard extends React.Component {

	constructor(props) {
		super(props)

		this.onClick = this._onClick.bind(this)
	}

	_onClick(symbolId) {
		this.props.onClick(this.props.id, symbolId)
	}

	render() { 
		return (
			<div className={'dobble-card dobble-card-' + this.props.id}>
				{this.props.symbols.map(
					(symbol, index) => 
					<DobbleSymbol 
						key={symbol.id} 
						className={'dobble-symbol-' + (index+1)} id={symbol.id} 
						onClick={this.onClick}/>
				)}
			</div>
		)
	}
}

