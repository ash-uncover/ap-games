import React from 'react'
import { connect } from 'react-redux'
import ActionRegistry from 'core/actions/ActionRegistry'

import SquareContainer from 'components/commons/squarecontainer/SquareContainer'
import MozaicTile from 'games/mozaic/components/game/MozaicTile'

import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_mozaic-game.scss'

class MozaicGame extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      duration : 0
    }

    this.onQuitGame = this.onQuitGame.bind(this)
  }

  // LIFECYCLE //

  componentDidMount () {
    if (!this.props.startTime) {
      this.props.history.push('/mozaic')
    }
  }

  // INTERNAL METHODS //

  // VIEW CALLBACKS //

  onQuitGame () {
    this.props.history.push('/mozaic')
  }

  // RENDERING //

  buildBoard () {
    return Object.values(this.props.board).map((item) => {
      if (item.id !== (this.props.size * this.props.size - 1)) {
        return (
          <MozaicTile
            key={item.id}
            id={item.id} />
        )
      }
    })
  }

  render () {
    return (
      <div className='game'>
        <div className='header' />
        <div className={`body ${this.props.won ? 'won' : ''}`}>
          <SquareContainer>
            {this.buildBoard()}
            <img
              className={`solution ${this.props.won || this.props.lost ? 'reveal' : ''}`}
              src='/src/games/mozaic/assets/img/puzzle_0.jpg' />
          </SquareContainer>
        </div>
        <div className='footer'>
          <button
            onClick={this.props.won || this.props.lost ? this.onQuitGame : this.props.onEndGame}>
            {this.props.won || this.props.lost ? 'Quitter' : 'Abandonner' }
          </button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    won,
    lost,
    tries,
    size,
    board,
    startTime,
    endTime
  } = state.mozaic.game
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
    lost,
    startTime: sTime,
    endTime: eTime,
    tries: tries || 0,
    size,
    board: board || []
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onEndGame: () => dispatch(ActionRegistry.mozaicEndGame()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MozaicGame)
