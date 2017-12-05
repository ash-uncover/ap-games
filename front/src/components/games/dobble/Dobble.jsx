import React from 'react'

import DobbleCards from 'game-data/dobble/DobbleCards'
import DobbleGame from 'game-data/dobble/DobbleGame'
import DobbleSymbols from 'game-data/dobble/DobbleSymbols'

import ArrayUtils from 'utils-lib/ArrayUtils'

import DobbleCard from './DobbleCard'

import './Dobble.scss'

class Dobble extends React.Component {

    constructor(props) {
        super(props)

        this.onClickFirst = this._onClickFirst.bind(this)
        this.onClickSecond = this._onClickSecond.bind(this)
        this.prepareGame = this._prepareGame.bind(this)

        this.state = {}
        
    }

    componentDidMount() {
        this.prepareGame()
    }
    _prepareGame() {
        let cards = ArrayUtils.shuffle(DobbleCards.CARDS)
        console.log(cards)
        this.setState({
            card1: cards.pop(),
            card2: cards.pop(),
            cards: cards,
            left: cards.length + 2,
            errors: 0,
            label: '',
            status: ''
        })
    }

    _onClickFirst(cardId, symbolId) {
        this.onClickSecond(cardId, symbolId)
    }
    _onClickSecond(cardId, symbolId) {
        let result = DobbleGame.isCommonSymbol(this.state.card1.id, this.state.card2.id, symbolId)
        let nextState = { 
            label: DobbleSymbols.SYMBOLS[symbolId].name,
            status: result ? 'TROUVE' : 'NON',
            errors: this.state.errors + (result ? 0 : 1)
        }
        if (result) {
            nextState = { 
                card1: this.state.cards.pop(),
                card2: this.state.card1
            }   
        }
        this.setState(nextState)
    }

    render() { 
        return (
            <div className='dobble'>
                <div className='dobble-score'>
                    <div>Cartes restantes: {this.state.left}</div>
                    <div>Erreurs: {this.state.errors}</div>
                </div>
                <div className='dobble-cards'>
                    {this.state.card1 ? <DobbleCard onClick={this.onClickFirst} {...this.state.card1} /> : null}
                    {this.state.card2 ? <DobbleCard onClick={this.onClickSecond} {...this.state.card2} /> : null}
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
