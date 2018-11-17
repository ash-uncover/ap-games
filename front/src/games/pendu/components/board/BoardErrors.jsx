import React from 'react'
import { connect } from 'react-redux'

import './_board.scss'

class BoardErrors extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  buildLetters () {
    return this.props.letters
      .filter((letter) => this.props.secret.indexOf(letter) === -1)
      .map((letter) => (
        <span key={`board-error-${letter}`}>
          {letter}
        </span>
      ))
  }
  render () {
    return (
      <div className='board-errors' >
        <div className='failedTiles'>
          {this.buildLetters()}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    letters: state.pendu.letters,
    secret: state.pendu.secret
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const BoardErrorsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardErrors)

export default BoardErrorsContainer
