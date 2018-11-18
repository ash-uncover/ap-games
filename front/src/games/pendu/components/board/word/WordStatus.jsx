import React from 'react'
import { connect } from 'react-redux'

import './_word.scss'

class WordStatus extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    return (
      <div className='word-status' >
        <img src={'/src/games/pendu/assets/img/' + this.props.nbErrors + '.png'} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { letters, secret, difficulty } = state.pendu.game.current
  const nbErrors = letters.filter((letter) => secret.indexOf(letter) === -1).length + difficulty.value
  return {
    nbErrors
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
