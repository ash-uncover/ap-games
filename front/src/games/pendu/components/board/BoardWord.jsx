import React from 'react'
import { connect } from 'react-redux'

import './_board.scss'

class BoardWord extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    return (
      <div className='board-word' >
        {this.props.word.map((letter, index) => (
          <span
            key={`letter-${index}`}
            className='board-word-letter'>
            {letter}
          </span>
        ))}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { letters, secret } = state.pendu
  const lost = letters.filter((letter) => secret.indexOf(letter) === -1).length > 10
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

const BoardWordContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardWord)

export default BoardWordContainer
