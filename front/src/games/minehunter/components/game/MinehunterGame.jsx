import React from 'react'
import { connect } from 'react-redux'

import ActionRegistry from 'core/actions/ActionRegistry'

import './_minehunter-game.scss'

import FillingContainer from 'components/commons/squarecontainer/FillingContainer'
import MinehunterTile from './MinehunterTile'

let TIMER_INTERVAL

class MinehunterGame extends React.Component {
  constructor (props) {
    super(props)

    this.onClickFlag = this.onClickFlag.bind(this)
    this.onClickQuestion = this.onClickQuestion.bind(this)
    this.onEndGame = this.onEndGame.bind(this)
    this.onQuitGame = this.onQuitGame.bind(this)
  }

  /* LIFECYCLE */

  componentDidMount () {
    if (!this.props.startTime) {
      this.props.history.push('/minehunter')
    } else {
      if (!this.props.endTime) {
        TIMER_INTERVAL = setInterval(this._updateTime, 80)
      }
    }
  }

  /* VIEW CALLBACKS */

  onClickFlag() {
    if (this.props.selectMode === 'flag') {
      this.props.onSetSelectMode('reveal')
    } else {
      this.props.onSetSelectMode('flag')
    }
  }

  onClickQuestion() {
    if (this.props.selectMode === 'question') {
      this.props.onSetSelectMode('reveal')
    } else {
      this.props.onSetSelectMode('question')
    }
  }

  onEndGame() {
    this.props.onEndGame()
  }

  onQuitGame() {
    this.props.history.push('/minehunter')
  }

  /* RENDERING */

  buildRow(row, rowIndex) {
    return (
      <div
        key={`row-${rowIndex}`}
        className='grid-row'>
        { row.map((cell, cellIndex) => this.buildCell(cell, rowIndex, cellIndex)) }
      </div>
    )
  }

  buildCell(cell, rowIndex, cellIndex) {
    return (
      <div
        key={`cell-${rowIndex}-${cellIndex}`}
        className='grid-tile'>
        <div className='grid-tile-inner'>
          <MinehunterTile
            x={cell.x}
            y={cell.y} />
        </div>
      </div>
    )
  }

  buildFlagClass() {
    let className = 'action'
    if (this.props.selectMode === 'flag') {
      className += ' pressed'
    }
    return className
  }

  buildQuestionClass() {
    let className = 'action'
    if (this.props.selectMode === 'question') {
      className += ' pressed'
    }
    return className
  }

  buildFooter() {
    if (this.props.won || this.props.lost) {
      return (
        <div className='footer'>
          <button
            className='action'
            onClick={this.onQuitGame}>
            <i className='icon fas fa-ban'></i>
            <span>Retour au menu</span>
          </button>
        </div>
      )
    }
    return (
      <div className='footer'>
        <button
          className={this.buildFlagClass()}
          onClick={this.onClickFlag}>
          <i className='icon fas fa-flag'></i>
          <span>Placer un drapeau</span>
        </button>
        <button
          className={this.buildQuestionClass()}
          onClick={this.onClickQuestion}>
          <i className='icon fas fa-question'></i>
          <span>Placer un doute</span>
        </button>
        <button
          className='action'
          onClick={this.onEndGame}>
          <i className='icon fas fa-ban'></i>
          <span>Abandonner</span>
        </button>
      </div>
    )
  }

  render () {
    return (
      <div className='game'>
        <div className='header'>
        </div>
        <div className='content'>
          <FillingContainer ratio={(this.props.grid[0] || []).length / this.props.grid.length}>
            <div className='grid'>
              { this.props.grid.map((row, rowIndex) => this.buildRow(row, rowIndex)) }
            </div>
          </FillingContainer>
        </div>
        { this.buildFooter() }
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const {
    startTime,
    endTime,
    won,
    lost,
    selectMode,
    grid
  } = state.minehunter.game
  
  return {
    startTime,
    endTime,
    won,
    lost,
    selectMode,
    grid
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSetSelectMode: (mode) => dispatch(ActionRegistry.minehunterSetSelectMode(mode)),
    onEndGame: () => dispatch(ActionRegistry.minehunterEndGame())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinehunterGame)

