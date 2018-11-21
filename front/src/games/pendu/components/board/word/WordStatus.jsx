import React from 'react'
import { connect } from 'react-redux'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_word.scss'

class WordStatus extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  buildRemaining () {
    const result = []
    for (let i = 0; i < this.props.base; i++) {
      let className = `word-status-remaining remaining-${i}`
      if (i >= this.props.remaining) {
        className += ' fall'
      }
      result.push(
        <div
          key={`remaining-${i}`}  
          className={className}>
          <img src='/src/games/pendu/assets/img/icon.svg' />
        </div>
      )
    }
    return result
  }

  render () {
    return (
      <div className='word-status' >
        <div className='word-status-content'>
          <img
            src={'/src/games/pendu/assets/img/status-base.png'} />
          {this.buildRemaining()}
          {this.props.won ?
            <div className='word-status-overlay' >
              <div className='word-status-text' >
                {I18NHelper.get('pendu.game.victory')}
              </div>
            </div>
          : null}
          {this.props.lost ?
            <div className='word-status-overlay' >
              <div className='word-status-text' >
                {I18NHelper.get('pendu.game.defeat')}
              </div>
            </div>
          : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    letters,
    secret,
    difficulty,
    won,
    lost
  } = state.pendu.game.current
  const remaining = difficulty.maxErrors - letters.filter((letter) => secret.indexOf(letter) === -1).length
  return {
    base: difficulty.maxErrors,
    remaining,
    won,
    lost
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const WordStatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordStatus)

export default WordStatusContainer
