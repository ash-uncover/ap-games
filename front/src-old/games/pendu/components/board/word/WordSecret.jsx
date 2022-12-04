import React from 'react'
import { connect } from 'react-redux'

import './_word.scss'

class WordSecret extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  buildLetterClassName (found) {
    let result = 'word-secret-letter'
    if (found) {
      result += ' found'
    }
    return result
  }

  render () {
    return (
      <div className='word-secret' >
        {this.props.word.map((letter, index) => (
          <div
            key={`letter-${index}`}
            className={this.buildLetterClassName(letter.found)}>
            {letter.letter}
          </div>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { letters, secret, lost } = state.pendu.game.current
  const word = secret.map((letter) => {
    if (!lost && letters.indexOf(letter) === -1) {
      return {
        letter: '',
        found: false
      }
    }
    return {
      letter,
      found: true
    }
  })
  return {
    word
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const WordSecretContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordSecret)

export default WordSecretContainer
