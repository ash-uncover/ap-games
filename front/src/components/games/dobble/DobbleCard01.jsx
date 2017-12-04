import React from 'react'
import PropTypes from 'prop-types'

import './Dobble.scss'

export default class DobbleCard01 extends React.Component {

	constructor(props) {
		super(props)
	}

	onClick(symbolId) {
		this.props.onClick(this.props.id, symbolId)
	}

	render() { 
		return (
			<div className='dobble-test' ref={(c) => this.container = c}>
				<img src='assets/images/dobble/flick/card-01.png' useMap='#Map' ref={(c) => this.image = c} />
				<map name='Map' id='Map'>
					<area onClick={this.onClick.bind(this, '13')} title='Ok' shape='poly' coords='105,740,273,903,353,812,348,711,241,650,169,644' />
					<area onClick={this.onClick.bind(this, '03')} title='Art' shape='poly' coords='598,810,633,727,705,650,764,586,897,660,849,804,737,916,646,922' />
					<area onClick={this.onClick.bind(this, '02')} title='Dinosaure' shape='poly' coords='254,127,388,226,505,292,548,266,580,199,542,119,486,50,422,52,345,66' />
					<area onClick={this.onClick.bind(this, '22')} title='Ancre' shape='poly' coords='625,455,713,388,830,311,924,380,948,471,913,591,876,615,734,570,646,546' />
					<area onClick={this.onClick.bind(this, '27')} title='Dauphin' shape='poly' coords='321,924,390,943,412,927,452,959,513,935,513,834,585,791,620,714,662,684,702,644,684,612,534,575,444,626,390,666,374,687,393,727,372,786,377,842' />
					<area onClick={this.onClick.bind(this, '00')} title='Pomme' shape='poly' coords='193,610,257,644,326,652,385,644,446,610,449,522,430,455,369,412,281,402,185,426,153,570' />
					<area onClick={this.onClick.bind(this, '28')} title='Fantôme' shape='poly' coords='249,380,361,386,454,391,484,319,452,279,393,247,238,196,153,218,116,290,118,396' />
					<area onClick={this.onClick.bind(this, '40')} title='Coccinelle' shape='poly' coords='484,418,572,482,612,458,660,418,745,343,732,258,668,218,601,218,556,266,510,330' />
				</map>
			</div>
		)
	}
}

