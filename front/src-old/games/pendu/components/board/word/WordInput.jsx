import React from 'react'
import { connect } from 'react-redux'

import ActionRegistry from 'core/actions/ActionRegistry'

import PenduData from '../../../model/PenduData'

import './_word.scss'

class WordInput extends React.Component {
  constructor (props) {
    super(props)
    
    this.onBlur = this.onBlur.bind(this)
    this.onInputChange = this.onInputChange.bind(this)
  }

  /* VIEW CALLBACKS */

  onBlur () {
    this.refs.input.focus()
  }

  onInputChange (event) {
    const v = event.target.value.toUpperCase()
    if (PenduData.REGEX.test(v)) {
      this.props.onSendLetter(v)
    }
  }

  /* RENDERING */

  render () {
    return (
      <input
        className='word-input'
        autoFocus ref='input'
        onBlur={this.onBlur}
        value={''}
        onChange={this.onInputChange} />
    )
  }
}

const mapStateToProps = (state) => {
  const { letters } = state.pendu.game.current
  return {
    letters
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSendLetter: (letter) => dispatch(ActionRegistry.penduSendLetter(letter))
  }
}

const WordInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(WordInput)

export default WordInputContainer
