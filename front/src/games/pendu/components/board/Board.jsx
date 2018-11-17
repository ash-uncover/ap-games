import React from 'react'
import { connect } from 'react-redux'

import ActionRegistry from 'core/actions/ActionRegistry'

import BoardErrors from './BoardErrors'
import BoardInput from './BoardInput'
import BoardStatus from './BoardStatus'
import BoardWord from './BoardWord'

import './_board.scss'

class Board extends React.Component {
  constructor (props) {
    super(props)

    this.onNewGame = this.onNewGame.bind(this)
  }

  onNewGame () {
    this.props.onStartGame()
  }

  render () {
    return (
      <div className='board'>
        <BoardStatus />
        <BoardWord />
        <BoardErrors />
        {!this.props.won && !this.props.lost && this.props.started ?
          <BoardInput />
        : null }
        {this.props.won ?
          <div>GAGNE</div>
        : null}
        {this.props.lost ?
          <div>PERDU</div>
        : null}
        {this.props.won || this.props.lost || !this.props.started ?
          <div>
            <button onClick={this.onNewGame}>Rejouer</button>
          </div>
        : null}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { secret, letters } = state.pendu
  const started = Boolean(secret.length)
  const won = started && !secret.some((letter) => letters.indexOf(letter) === -1)
  const lost = letters.filter((letter) => secret.indexOf(letter) === -1).length > 10
  return {
    started,
    won,
    lost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartGame: (letter) => dispatch(ActionRegistry.penduStartGame())
  }
}

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default BoardContainer
