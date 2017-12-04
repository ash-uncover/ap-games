import React from 'react'
import PropTypes from 'prop-types'

import DobbleGame from 'game-data/dobble/DobbleGame'

import './Dobble.scss'

export default class DobbleCard extends React.Component {

    constructor(props) {
        super(props)
        this.buildSymbol = this._buildSymbol.bind(this)
    }

    onClick(symbolId) {
        this.props.onClick(this.props.id, symbolId)
    }

    componentDidMount() {
        this.resize()
    }

    componentDidUpdate(prevProps, prevState) {
        this.resize()
    }

    resize() {
        let clientRect = this.container.getBoundingClientRect();
        let clientWidth = clientRect.width
        let clientHeight = clientRect.height
        let max = clientWidth > clientHeight ? clientHeight : clientWidth
        this.content.style.transform = 'scale(' + (max / 1024) + ')'
    }

    _buildSymbol(symbol) {
        return (
            <area 
                key={symbol.id}
                onClick={this.onClick.bind(this, symbol.id)} 
                title={DobbleGame.SYMBOLS[symbol.id].name}
                shape='poly' 
                coords={symbol.coords} />
        )
    }

    render() { 
        return (
            <div className='dobble-card' ref={(c) => this.container = c}>
                <div className='dobble-card-content' ref={(c) => this.content = c}>
                    <img src={'assets/images/dobble/flick/done/card-' + this.props.id + '.png'} useMap='#Map' ref={(c) => this.image = c} />
                    <map name='Map' id='Map'>
                        {this.props.symbols.map(this.buildSymbol)}
                    </map>
                </div>
            </div>
        )
    }
}

