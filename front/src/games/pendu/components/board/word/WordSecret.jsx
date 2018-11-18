import React from 'react'
import { connect } from 'react-redux'

import './_word.scss'

class WordSecret extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    return (
      <div className='word-secret' >
        {this.props.word.map((letter, index) => (
          <span
            key={`letter-${index}`}
            className='word-secret-letter'>
            {letter}
          </span>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { letters, secret, lost } = state.pendu.game.current
  const word = secret.map((letter) => {
    if (!lost && letters.indexOf(letter) === -1) {
      return '_'
    }
    return letter
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
