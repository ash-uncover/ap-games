import React from 'react'
import { connect } from 'react-redux'
import ActionRegistry from 'core/actions/ActionRegistry'

import SquareContainer from 'components/commons/squarecontainer/SquareContainer'
import MozaicTile from 'games/mozaic/components/game/MozaicTile'

import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_mozaic-game.scss'

class MozaicGame extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      duration : 0
    }
  }

  // LIFECYCLE //

  componentDidMount () {
    if (!this.props.startTime) {
      this.props.history.push('/mozaic')
    }
  }

  // INTERNAL METHODS //

  // VIEW CALLBACKS //

  // RENDERING //

  buildBoard () {
    return Object.values(this.props.board).map((item) => {
      if (item.id !== (this.props.size * this.props.size - 1)) {
        return (
          <MozaicTile
            key={item.id}
            id={item.id} />
        )
      }
    })
  }

  render () {
    if (this.props.won) {
      console.log('WON')
    }
    return (
      <div className='game'>
        <SquareContainer>
          {this.buildBoard()}
        </SquareContainer>
      </div>
    )
  }
}

const mapStateToProps = state => {
  const {
    won,
    tries,
    size,
    board,
    startTime,
    endTime
  } = state.mozaic.game
  let sTime = null
  if (startTime) {
    if (startTime instanceof Date) {
      sTime = startTime
    } else {
      sTime = new Date(startTime)
    }
  }
  let eTime = null
  if (endTime) {
    if (endTime instanceof Date) {
      eTime = endTime
    } else {
      eTime = new Date(endTime)
    }
  }
  return {
    won,
    startTime: sTime,
    endTime: eTime,
    tries: tries || 0,
    size,
    board: board || []
  }
}

const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MozaicGame)
