import React from 'react'

import DobbleCard from './DobbleCard'
import DobbleGame from 'game-data/dobble/DobbleGame'

import './Dobble.scss'

class Dobble extends React.Component {

    constructor(props) {
        super(props)

        this.onClickFirst = this._onClickFirst.bind(this)
        this.onClickSecond = this._onClickSecond.bind(this)

        this.state = { 
            card1: DobbleGame.CARDS[2],
            card2: DobbleGame.CARDS[0],
            left: 34,
            errors: 4,
            label: '',
            status: ''
        }

    }

    _onClickFirst(cardId, symbolId) {
        let result = DobbleGame.isCommonSymbol(this.state.card1.id, this.state.card2.id, symbolId)
        this.setState({ 
            label: DobbleGame.SYMBOLS[symbolId].name,
            status: result ? 'TROUVE' : 'NON'
        })
    }
    _onClickSecond(cardId, symbolId) {
        let result = DobbleGame.isCommonSymbol(this.state.card1.id, this.state.card2.id, symbolId)
        this.setState({ 
            label: DobbleGame.SYMBOLS[symbolId].name,
            status: result ? 'TROUVE' : 'NON'
        })
    }

    render() { 
        return (
            <div className='dobble'>
                <div className='dobble-score'>
                    <div>Cartes restantes: {this.state.left}</div>
                    <div>Erreurs: {this.state.errors}</div>
                </div>
                <div className='dobble-cards'>
                    <DobbleCard onClick={this.onClickFirst} {...this.state.card1} />
                    <DobbleCard onClick={this.onClickSecond} {...this.state.card2} />
                </div>
                <div>
                    {this.state.label}
                </div>
                <p>
                    {this.state.status}
                </p>
            </div>
        )
    }
}

export default Dobble
