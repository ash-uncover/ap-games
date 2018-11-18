import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import ActionRegistry from 'core/actions/ActionRegistry'
import PenduDifficulty from 'games/pendu/model/PenduDifficulty'

import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_home.scss'

class NewMenu extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      difficulty: PenduDifficulty.MEDIUM
    }

    this.onPreviousDifficulty = this.onPreviousDifficulty.bind(this)
    this.onNextDifficulty = this.onNextDifficulty.bind(this)
    this.onNewGame = this.onNewGame.bind(this)
  }

  /* VIEW CALLBACKS */

  onNewGame () {
    this.props.onStartGame(this.state.difficulty)
    this.props.history.push('/pendu/game')
  }
  
  onPreviousDifficulty () {
    let difficulty = PenduDifficulty.EASY
    if (this.state.difficulty === PenduDifficulty.HARD) {
      difficulty = PenduDifficulty.MEDIUM
    }
    this.setState({ difficulty })
  }
  
  onNextDifficulty () {
    let difficulty = PenduDifficulty.HARD
    if (this.state.difficulty === PenduDifficulty.EASY) {
      difficulty = PenduDifficulty.MEDIUM
    }
    this.setState({ difficulty })
  }

  /* RENDERING */

  render () {
    return (
      <div className='new-menu'>
        <h2 className='menu-title'>
          {I18NHelper.get('pendu.menu.newgame')}
        </h2>

        <div className='menu-entry menu-selector'>
          <div className='label'>
          {I18NHelper.get('pendu.difficulty')}
          </div>
          <div className='selector'>
            <button
              className='selector-action'
              disabled={this.state.difficulty === PenduDifficulty.EASY}
              onClick={this.onPreviousDifficulty}>
              {'<'}
            </button>
            <div className='selector-value'>
              {I18NHelper.get(this.state.difficulty.text)}
              </div>
            <button
              className='selector-action'
              disabled={this.state.difficulty === PenduDifficulty.HARD}
              onClick={this.onNextDifficulty}>
              {'>'}
            </button>
          </div>
        </div>

        <button
          className='menu-entry menu-action'
          onClick={this.onNewGame}>
          {I18NHelper.get('pendu.menu.newgame')}
        </button>

        <Link to={`/pendu`}>
          <button className='menu-entry menu-action'>
          {I18NHelper.get('pendu.menu.back')}
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onStartGame: (difficulty) => dispatch(ActionRegistry.penduStartGame(difficulty))
  }
}

const NewMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewMenu)

export default NewMenuContainer
