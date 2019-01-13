import React from 'react'
import { connect } from 'react-redux'

import ActionRegistry from 'core/actions/ActionRegistry'

import './_minehunter-game.scss'

class MinehunterTile extends React.Component {
  constructor (props) {
    super(props)

    this.clickTile = this.clickTile.bind(this)
  }

  /* LIFECYCLE */

  /* VIEW CALLBACKS */

  clickTile() {
    this.props.onClickTile(this.props.x, this.props.y)
  }

  /* RENDERING */

  buildClassName() {
    let result = 'tile'
    if (this.props.revealed) {
      result += ' revealed'
    }
    return result
  }

  buildContent() {
    if (this.props.revealed || this.props.lost) {
      if (this.props.bomb) {
        return (
          <div className='icon-container'>
            <i className='icon fas fa-bomb'></i>
          </div>
        )
      }
      return (
        <div className='icon-container'>
          <i className={`icon near-${this.props.near}`}></i>
        </div>
      )
    } else {
      return (
        <button
          className='mask'
          onClick={this.clickTile}>
          { this.props.flag ?
            <div className='icon-container'>
              <i className='icon fas fa-flag'></i>
            </div>
          : null }
          { this.props.question ?
            <div className='icon-container'>
              <i className='icon fas fa-question'></i>
            </div>
          : null }
        </button>
      )
    }
  }

  render () {
    return (
      <div className={this.buildClassName()}>
        { this.buildContent() }
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const { lost, grid } = state.minehunter.game
  const { flag, question, bomb, near, revealed } = grid[ownProps.x][ownProps.y]
  const { x, y } = ownProps
  
  return {
    lost,
    x,
    y,
    near,
    bomb,
    flag,
    question,
    revealed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClickTile: (x, y) => dispatch(ActionRegistry.minehunterRevealTile(x, y))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinehunterTile)

