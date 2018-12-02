import React from 'react'
import { connect } from 'react-redux'
import { Switch, Route } from 'react-router-dom'

import ActionRegistry from 'core/actions/ActionRegistry'
import MemoryDifficulty from '../model/MemoryDifficulty'

import FullscreenHelper from 'utils-lib/FullscreenHelper'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_memory.scss'

class MemoryHome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPage: 0,
      difficulty: Object.values(MemoryDifficulty)[Math.floor(Object.values(MemoryDifficulty).length / 2)]
    }

    this.toGame = this.toGame.bind(this)
    this.toOptions = this.toOptions.bind(this)
    this.toCredits = this.toCredits.bind(this)
    this.toNewGame = this.toNewGame.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onExitGame = this.onExitGame.bind(this)
    this.onPreviousDifficulty = this.onPreviousDifficulty.bind(this)
    this.onNextDifficulty = this.onNextDifficulty.bind(this)
  }

  // VIEW CALLBACKS //

  toGame () {
    this.props.onNewGame(this.state.difficulty)
    this.props.history.push(`${this.props.match.url}/game`)
  }

  toOptions () {
    this.setState({ currentPage: 1 })
  }

  toCredits () {
    this.setState({ currentPage: 2 })
  }

  toNewGame () {
    this.setState({ currentPage: 3 })
  }

  onBack () {
    this.setState({ currentPage: 0 })
  }

  onExitGame () {
    this.props.history.push('/')
    FullscreenHelper.exitFullscreen()
  }

  onPreviousDifficulty () {
    const values = Object.values(MemoryDifficulty)
    const currentIndex = values.indexOf(this.state.difficulty)
    const index = (currentIndex - 1 + values.length) % values.length
    this.setState({
      difficulty: values[index]
    })
  }

  onNextDifficulty () {
    const values = Object.values(MemoryDifficulty)
    const currentIndex = values.indexOf(this.state.difficulty)
    const index = (currentIndex + 1) % values.length
    this.setState({
      difficulty: values[index]
    })
  }

  // RENDERING //

  buildClassName (index, isHome) {
    let result = 'home-page'
    if (index === this.state.currentPage) {
      result += ' current'
    } else if (isHome) {
      result += ' previous'
    } else {
      result += ' next'
    }
    return result
  }

  render () {
    return (
      <div className='home'>
        <div className='home-page-container'>
          <div
            className={this.buildClassName(0, true)}>
            <h2>{I18NHelper.get('memory.name')}</h2>
            <button
              onClick={this.toNewGame}>
              {I18NHelper.get('memory.menu.newgame')}
            </button>
            <button
              onClick={this.toOptions}>
              {I18NHelper.get('memory.menu.options')}
            </button>
            <button
              onClick={this.toCredits}>
              {I18NHelper.get('memory.menu.credits')}
            </button>
            <button
              onClick={this.onExitGame}>
              {I18NHelper.get('memory.menu.exit')}
            </button>
          </div>
          <div
            className={this.buildClassName(1, false)}>
            <h2>{I18NHelper.get('memory.menu.options')}</h2>
            <button
              onClick={this.onBack}>
              {I18NHelper.get('memory.menu.back')}
            </button>
          </div>
          <div
            className={this.buildClassName(2, false)}>
            <h2>{I18NHelper.get('memory.menu.credits')}</h2>
            <button
              onClick={this.onBack}>
              {I18NHelper.get('memory.menu.back')}
            </button>
          </div>
          <div
            className={this.buildClassName(3, false)}>
            <h2>{I18NHelper.get('memory.menu.newgame')}</h2>
            <div className='selector'>
              <label className='selector-label'>
                {I18NHelper.get('memory.difficulty')}
              </label>
              <div className='selector-value'>
                <button
                  disabled={Object.values(MemoryDifficulty).indexOf(this.state.difficulty) === 0}
                  onClick={this.onPreviousDifficulty}>
                  {'<'}
                </button>
                <div>
                  {I18NHelper.get(this.state.difficulty.text)}
                </div>
                <button
                  disabled={Object.values(MemoryDifficulty).indexOf(this.state.difficulty) === Object.values(MemoryDifficulty).length - 1}
                  onClick={this.onNextDifficulty}>
                  {'>'}
                </button>
              </div>
            </div>
            <button
              onClick={this.toGame}>
              {I18NHelper.get('memory.menu.play')}
            </button>
            <button
              onClick={this.onBack}>
              {I18NHelper.get('memory.menu.back')}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {
    onNewGame: (difficulty) => dispatch(ActionRegistry.memoryStartGame(difficulty))
  }
}

const MemoryHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MemoryHome)

export default MemoryHomeContainer

