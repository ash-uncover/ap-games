import React from 'react'
import { connect } from 'react-redux'
import I18NHelper from 'utils-lib/i18n/I18NHelper'
import ActionRegistry from 'core/actions/ActionRegistry'

import { Link } from 'react-router-dom'

import WordErrors from './WordErrors'
import WordInput from './WordInput'
import WordStatus from './WordStatus'
import WordWord from './WordSecret'

import './_word.scss'

class Word extends React.Component {
  constructor (props) {
    super(props)
  }
  
  /* RENDERING */

  render () {
    return (
      <div className='word'>
        <WordStatus />
        <WordWord />
        <WordErrors />
        {!this.props.won && !this.props.lost ?
          <WordInput />
        : null }
        {this.props.won ?
          <div>
            {I18NHelper.get('pendu.game.victory')}
          </div>
        : null}
        {this.props.lost ?
          <div>
            {I18NHelper.get('pendu.game.defeat')}
          </div>
        : null}
        {this.props.won || this.props.lost ?
          <div>
            <button onClick={this.props.onReplay}>
              {I18NHelper.get('pendu.menu.replay')}
            </button>
          </div>
        :
          <div>
            <button onClick={this.props.onGiveUp}>
              {I18NHelper.get('pendu.menu.giveup')}
            </button>
          </div>
        }
        {this.props.won || this.props.lost ?
          <button onClick={this.props.onEndGame}>
            {I18NHelper.get('pendu.menu.endgame')}
          </button>
        : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { won, lost } = state.pendu.game.current
  return {
    won,
    lost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEndGame: () => dispatch(ActionRegistry.penduEndGame()),
    onGiveUp: () => dispatch(ActionRegistry.penduGiveUpWord()),
    onReplay: () => dispatch(ActionRegistry.penduNextWord())
  }
}

const WordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Word)

export default WordContainer
