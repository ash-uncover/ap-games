import React from 'react'

import DobbleCards from 'game-data/dobble/DobbleCards'
import DobbleGame from 'game-data/dobble/DobbleGame'
import DobbleSymbols from 'game-data/dobble/DobbleSymbols'

import { ArrayUtils } from 'utils-lib'

import DobbleCard from './DobbleCard'

import './Dobble.scss'

class Dobble extends React.Component {
  constructor (props) {
    super(props)

    this.onCardClick = this._onCardClick.bind(this)
  }

  _onCardClick (cardId, symbolId) {
    this.props.onSelectSymbol(symbolId)
  }

  render () {
    console.log('RERENDER DOBBLE')
    switch (this.props.state) {
      case 'NOT_STARTED': return this.renderNotStarted()
      case 'STARTED': return this.renderStarted()
      case 'FINISHED': return this.renderFinished()
    }
  }

  renderNotStarted () {
    return (
      <div className='dobble'>
        <div className='dobble-message-container'>
          <div className='dobble-message'>
            <p>Bienvenue à DOBBLE</p>
            <button onClick={this.props.onStart}>Démarrer</button>
          </div>
        </div>
      </div>
    )
  }

  renderStarted () {
    return (
      <div className='dobble'>
        <div className='dobble-score'>
          <div>Cartes restantes: {this.props.cardsLeft.length + 1}</div>
          <div>Erreurs: {this.props.errors}</div>
        </div>
        <div className='dobble-cards'>
          <DobbleCard onClick={this.onCardClick} {...this.props.cardsLeft[this.props.cardsLeft.length - 1]} />
          <DobbleCard onClick={this.onCardClick} {...this.props.cardsFound[this.props.cardsFound.length - 1]} />
        </div>
      </div>
    )
  }

  renderFinished () {
    return (
      <div className='dobble'>
        <div className='dobble-message-container'>
          <div className='dobble-message'>
            <p>Partie terminée</p>
            <button onClick={this.props.onStart}>Rejouer</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Dobble
