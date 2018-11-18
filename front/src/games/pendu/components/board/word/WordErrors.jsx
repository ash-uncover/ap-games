import React from 'react'
import { connect } from 'react-redux'

import './_word.scss'

class WordErrors extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  buildLetters () {
    return this.props.letters
      .filter((letter) => this.props.secret.indexOf(letter) === -1)
      .map((letter) => (
        <span key={`word-error-${letter}`}>
          {letter}
        </span>
      ))
  }
  render () {
    return (
      <div className='word-errors' >
        <div className='failedTiles'>
          {this.buildLetters()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { secret, letters } = state.pendu.game.current
  return {
    letters,
    secret
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const WordErrorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordErrors)

export default WordErrorsContainer
