import React from 'react'
import { connect } from 'react-redux'

import ActionRegistry from 'core/actions/ActionRegistry'

import PenduData from '../../model/PenduData'

import './_board.scss'

class BoardInput extends React.Component {
  constructor (props) {
    super(props)
    
    this.onBlur = this.onBlur.bind(this)
    this.onChange = this.onChange.bind(this)
  }

  /* VIEW CALLBACKS */

  onBlur () {
    this.refs.input.focus()
  }

  onChange (event) {
    const v = event.target.value.toUpperCase()
    if (PenduData.REGEX.test(v)) {
      this.props.onSendLetter(v)
    }
  }

  /* RENDERING */

  render () {
    return (
      <input
        className='board-input'
        autoFocus ref='input'
        onBlur={this.onBlur}
        value={''}
        onChange={this.onChange} />
    )
  }
}

const mapStateToProps = (state) => {
  const { letters } = state.pendu
  return {
    letters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendLetter: (letter) => dispatch(ActionRegistry.penduSendLetter(letter))
  }
}

const BoardInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(BoardInput)

export default BoardInputContainer
