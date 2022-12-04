import React from 'react'
import { connect } from 'react-redux'

import Map from './map/Map'

import './_board.scss'

class Board extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='risk-board'>
        <div className='board-top'>
          Top
        </div>
        <div className='board-middle'>
          <div className='board-left'>
            left
          </div>
          <div className='board-central'>
            <Map />
          </div>
          <div className='board-right'>
            right
          </div>
        </div>
        <div className='board-bottom'>
          Bottom
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const BoardContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Board)

export default BoardContainer
