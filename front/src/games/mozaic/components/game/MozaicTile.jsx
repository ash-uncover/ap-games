import React from 'react'
import { connect } from 'react-redux'
import ActionRegistry from 'core/actions/ActionRegistry'

import './_mozaic-game.scss'

class MozaicTile extends React.Component {
  constructor (props) {
    super(props)

    this.onClick = this.onClick.bind(this)
  }

  // LIFECYCLE //

  // INTERNAL METHODS //

  // VIEW CALLBACKS //

  onClick () {
    if (!this.props.won && !this.props.lost) {
      this.props.onClick()
    }
  }

  // RENDERING //

  render () {
    return (
      <button
        className='tile-container'
        onClick={this.onClick}
        style={{
          width: `${100 / this.props.size}%`,
          transform: `translateX(${this.props.x * 100}%) translateY(${this.props.y * 100}%)`
        }}>
        <div
          className='tile-background-container'
          style={{
            width: `${this.props.size * 100}%`,
            height: `${this.props.size * 100}%`,
            transform: `translateX(-${100 / this.props.size * this.props.baseX}%) translateY(-${100 / this.props.size * this.props.baseY}%)`
          }}>
          <img
            className='tile-background'
            src='/src/games/mozaic/assets/img/puzzle_0.jpg' />
        </div>
        <div className='tile-container-inner'>
          <div className='tile-content' />
        </div>
      </button>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { size, won, lost } = state.mozaic.game
  const { id, x, y, baseX, baseY } = state.mozaic.game.board[ownProps.id]
  
  return {
    size,
    won,
    lost,
    id,
    x,
    y,
    baseX,
    baseY
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(ActionRegistry.mozaicClickTile(ownProps.id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MozaicTile)
