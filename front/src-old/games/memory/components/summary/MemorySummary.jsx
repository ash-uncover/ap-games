import React from 'react'
import { connect } from 'react-redux'

import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_summary.scss'

class MemorySummary extends React.Component {
  constructor (props) {
    super(props)
    
    this.onMenu = this.onMenu.bind(this)
  }

  // LIFECYCLE //

  componentWillMount() {
    if (!this.props.endTime) {
      this.props.history.push('/memory')
    }
  }

  // VIEW CALLBACKS //

  onMenu () {
    this.props.history.push('/memory')
  }

  // RENDERING //

  render () {
    return (
      <div className='summary'>
        <div>
          {this.props.won ? 'Gagné !' : 'Perdu !'}
        </div>
        <button
          onClick={this.onMenu}>
          Retour au Menu
        </button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    won,
    errors,
    found,
    board,
    startTime,
    endTime
  } = state.memory.game
  return {
    won,
    startTime,
    endTime,
    errors,
    found,
    board: board || []
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const MemorySummaryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemorySummary)

export default MemorySummaryContainer

