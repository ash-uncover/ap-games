import React from 'react'
import { connect } from 'react-redux'
import ActionRegistry from 'core/actions/ActionRegistry'

import SquareGrid from 'components/commons/squaregrid/SquareGrid'
import MemoryCard from './MemoryCard'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_game.scss'

class MemoryGame extends React.Component {
  constructor (props) {
    super(props)

    this.onUnrevealCards = this.onUnrevealCards.bind(this)
    this.onSummary = this.onSummary.bind(this)
    this.onRevealAll = this.onRevealAll.bind(this)
  }

  // LIFECYCLE //

  componentWillMount() {
    if (!this.props.startTime) {
      this.props.history.push('/memory')
    }
  }

  // VIEW CALLBACKS //

  onSummary () {
    this.props.history.push('/memory/summary')
  }

  onUnrevealCards () {
    this.props.onUnrevealCards()
  }

  onRevealAll () {
    this.props.onRevealAll()
  }

  // RENDERING //

  render () {
    return (
      <div className='game'>
        <div className='game-status'>
          <div className='info'>
            {I18NHelper.get('memory.status.tries')}: {(this.props.errors || 0) + (this.props.found)}
          </div>
          <div className='title'>
            {I18NHelper.get('memory.name')}
          </div>
          <div className='info'>
            {I18NHelper.get('memory.status.time')}: {this.props.found || 0}
          </div>
        </div>
        <div className='game-board'>
          <SquareGrid>
            {this.props.board.map((item, index) => (
              <MemoryCard
                key={index}
                item={item} />
            ))}
          </SquareGrid>
        </div>
        <div className='game-footer'>
          {this.props.won || this.props.endTime ?
            <button
              onClick={this.onSummary}>
              Fin de la partie
            </button>
          :
            <button
              onClick={this.onRevealAll}>
              Abandonner
            </button>
          }
          {this.props.blocked ?
            <div
              className='overlay'
              onClick={this.onUnrevealCards} />
          : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    won,
    errors,
    found,
    blocked,
    board,
    startTime,
    endTime
  } = state.memory.game
  return {
    won,
    startTime,
    endTime,
    errors: errors || 0,
    found,
    blocked, 
    board: board || []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onUnrevealCards: () => dispatch(ActionRegistry.memoryUnrevealCards()),
    onRevealAll: () => dispatch(ActionRegistry.memoryRevealAll())
  }
}

const MemoryGameContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryGame)

export default MemoryGameContainer

