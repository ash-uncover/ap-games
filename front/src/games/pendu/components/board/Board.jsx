import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import Word from './word/Word'

import './_board.scss'

class Board extends React.Component {
  constructor (props) {
    super(props)
  }

  /* LIFECYCLE */

  componentWillMount() {
    if (!this.props.started) {
      this.props.history.push('/pendu')
    }
  }

  /* RENDERING */

  render () {
    if (this.props.finished) {
      return this.renderFinished()
    }
    if (this.props.started) {
      return this.renderStarted()
    }
    return <div className='board' />
  }

  renderStarted() {
    return (
      <div className='board'>
        <div className='board-header'>
          <div>
            {`${I18NHelper.get('pendu.difficulty')}: ${I18NHelper.get(this.props.difficulty.text)}`}
          </div>
          <div>
            {`${I18NHelper.get('pendu.game.played')}: ${this.props.gameWon + this.props.gameLost}`}
          </div>
          <div>
            {`${I18NHelper.get('pendu.game.won')}: ${this.props.gameWon}`}
          </div>
          <div>
            {`${I18NHelper.get('pendu.game.lost')}: ${this.props.gameLost}`}
          </div>
        </div>
        <div className='board-content'>
          <Word />
        </div>
      </div>
    )
  }

  renderFinished() {
    return (
      <div className='board'>
        <div className='board-content'>
          Partie terminée
          <div>
            {`${I18NHelper.get('pendu.difficulty')}: ${I18NHelper.get(this.props.difficulty.text)}`}
          </div>
          <div>
            {`${I18NHelper.get('pendu.game.played')}: ${this.props.gameWon + this.props.gameLost}`}
          </div>
          <div>
            {`${I18NHelper.get('pendu.game.won')}: ${this.props.gameWon}`}
          </div>
          <div>
            {`${I18NHelper.get('pendu.game.lost')}: ${this.props.gameLost}`}
          </div>
          <div className='board-footer'>
            <Link to={`/pendu`}>
              <button className='menu-entry menu-action'>
              {I18NHelper.get('pendu.menu.back')}
              </button>
            </Link>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    gameWon,
    gameLost,
    started,
    finished,
    difficulty
  } = state.pendu.game
  return {
    difficulty,
    gameWon,
    gameLost,
    started,
    finished
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default BoardContainer
