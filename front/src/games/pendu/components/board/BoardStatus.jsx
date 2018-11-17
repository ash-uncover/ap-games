import React from 'react'
import { connect } from 'react-redux'

import './_board.scss'

class BoardStatus extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    return (
      <div className='board-status' >
        <img src={'/src/games/pendu/assets/img/' + this.props.nbErrors + '.png'} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { letters, secret } = state.pendu
  const nbErrors = letters.filter((letter) => secret.indexOf(letter) === -1).length
  return {
    nbErrors
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const BoardStatusContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardStatus)

export default BoardStatusContainer
