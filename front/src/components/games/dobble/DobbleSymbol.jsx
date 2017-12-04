import React from 'react'

import './Dobble.scss'

export default class DobbleSymbol extends React.Component {

	constructor(props) {
		super(props)

		this.onClick = this._onClick.bind(this)
	}

	_onClick(event) {
		event.preventDefault()
		this.props.onClick(this.props.id)
	}

	render() { 
		return (
			<div className={'dobble-symbol ' + this.props.className} onClick={this.onClick}>
				<img src={'assets/images/dobble/dobble-card-' + this.props.id + '.png'} />
			</div>
		)
	}
}
