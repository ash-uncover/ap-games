import React from 'react'
import { connect } from 'react-redux'
import ActionRegistry from 'core/actions/ActionRegistry'

import SquareGrid from 'components/commons/squaregrid/SquareGrid'
import Timer from 'components/commons/timer/Timer'

import MemoryCard from './MemoryCard'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_game.scss'

let TIMER_INTERVAL

class MemoryGame extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      duration : 0
    }

    this.onUnrevealCards = this.onUnrevealCards.bind(this)
    this.onEndGame = this.onEndGame.bind(this)
    this.onRevealAll = this.onRevealAll.bind(this)

    this._updateTime = this._updateTime.bind(this)
  }

  // LIFECYCLE //

  static getDerivedStateFromProps(props, state) {
    if (props.endTime) {
      clearInterval(TIMER_INTERVAL)
    }
  }

  componentDidMount () {
    if (!this.props.startTime) {
      this.props.history.push('/memory')
    } else {
      if (!this.props.endTime) {
        TIMER_INTERVAL = setInterval(this._updateTime, 80)
      }
    }
  }

  componentWillUnmount () {
    if (this.timerInterval) {
      clearInterval(TIMER_INTERVAL)
    }
  }

  // INTERNAL METHODS //

  _updateTime () {
    if (this.props.startTime) {
      const endTime = this.props.endTime || new Date()
      this.setState({
        duration: endTime.getTime() - this.props.startTime.getTime()
      })
    }
  }

  // VIEW CALLBACKS //

  onEndGame () {
    this.props.history.push('/memory')
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
            {I18NHelper.get('memory.status.time')}: <Timer duration={this.state.duration} showNilSeconds={true} />
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
          {!this.props.won && !this.props.endTime ?
            <button
              onClick={this.onRevealAll}>
              Abandonner
            </button>
          : null }
        </div>

        {this.props.won ?
          <div className='dialog'>
            <div className='content'>
              <h2 className='title'>
                {I18NHelper.get('memory.game.victory')}
              </h2>
              <div className='body'>
                <div>
                  <Timer duration={this.props.endTime.getTime() - this.props.startTime.getTime()} />
                </div>
              </div>
              <div className='footer'>
                <button
                  className='action'
                  onClick={this.onEndGame}>
                  Fin de la partie
                </button>
              </div>
            </div>
          </div>
        : null }

        {!this.props.won && this.props.endTime ?
          <div className='dialog'>
            <div className='content'>
              <h2 className='title'>
                {I18NHelper.get('memory.game.defeat')}
              </h2>
              <div className='body'>
                <div className='info'>
                  <div className='label'>
                    Nombre d'essais :
                  </div>
                  <div className='value'>
                    {this.props.errors + this.props.found}
                  </div>
                </div>
                <div className='info'>
                  <div className='label'>
                    Durée de la partie :
                  </div>
                  <div className='value'>
                    <Timer duration={this.props.endTime.getTime() - this.props.startTime.getTime()} />
                  </div>
                </div>
              </div>
              <div className='footer'>
                <button
                  className='action'
                  onClick={this.onEndGame}>
                  Fin de la partie
                </button>
              </div>
            </div>
          </div>
        : null }
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
  let sTime = null
  if (startTime) {
    if (startTime instanceof Date) {
      sTime = startTime
    } else {
      sTime = new Date(startTime)
    }
  }
  let eTime = null
  if (endTime) {
    if (endTime instanceof Date) {
      eTime = endTime
    } else {
      eTime = new Date(endTime)
    }
  }
  return {
    won,
    startTime: sTime,
    endTime: eTime,
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

