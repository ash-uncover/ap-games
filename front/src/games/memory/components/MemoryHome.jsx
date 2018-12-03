import React from 'react'
import { connect } from 'react-redux'
import PageContainer from 'components/commons/pagecontainer/PageContainer'

import ActionRegistry from 'core/actions/ActionRegistry'

import FullscreenHelper from 'utils-lib/FullscreenHelper'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_memory.scss'

const PAGE = {
  MAIN: 0,
  OPTIONS: 1,
  CREDITS: 2,
  NEW_GAME: 3
}

const NUMBER = {
  5: 5, 10: 10, 15: 15, 20: 20, 25: 25, 30: 30
}

class MemoryHome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPage: 0,
      difficulty: NUMBER[20]
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
    this.setState({ currentPage: PAGE.OPTIONS })
  }

  toCredits () {
    this.setState({ currentPage: PAGE.CREDITS })
  }

  toNewGame () {
    this.setState({ currentPage: PAGE.NEW_GAME })
  }

  onBack () {
    this.setState({ currentPage: PAGE.MAIN })
  }

  onExitGame () {
    this.props.history.push('/')
    FullscreenHelper.exitFullscreen()
  }

  onPreviousDifficulty () {
    const values = Object.values(NUMBER)
    const currentIndex = values.indexOf(this.state.difficulty)
    const index = (currentIndex - 1 + values.length) % values.length
    this.setState({
      difficulty: values[index]
    })
  }

  onNextDifficulty () {
    const values = Object.values(NUMBER)
    const currentIndex = values.indexOf(this.state.difficulty)
    const index = (currentIndex + 1) % values.length
    this.setState({
      difficulty: values[index]
    })
  }

  // RENDERING //

  render () {
    return (
      <div className='home'>
        <PageContainer page={this.state.currentPage}>
          
          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('memory.name')}
            </h2>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toNewGame}>
                {I18NHelper.get('memory.menu.newgame')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toOptions}>
                {I18NHelper.get('memory.menu.options')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toCredits}>
                {I18NHelper.get('memory.menu.credits')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onExitGame}>
                {I18NHelper.get('memory.menu.exit')}
              </button>
            </div>
          </div>

          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('memory.menu.options')}
            </h2>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onBack}>
                {I18NHelper.get('memory.menu.back')}
              </button>
            </div>
          </div>

          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('memory.menu.credits')}
            </h2>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onBack}>
                {I18NHelper.get('memory.menu.back')}
              </button>
            </div>
          </div>

          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('memory.menu.newgame')}
            </h2>
            <div className='entry'>
              <label className='label'>
                {I18NHelper.get('memory.difficulty')}
              </label>
            </div>
            <div className='entry'>
              <div className='selector'>
                <button
                  className='selector-action'
                  disabled={Object.values(NUMBER).indexOf(this.state.difficulty) === 0}
                  onClick={this.onPreviousDifficulty}>
                  {'<'}
                </button>
                <div className='selector-label'>
                  {I18NHelper.get(this.state.difficulty)}
                </div>
                <button
                  className='selector-action'
                  disabled={Object.values(NUMBER).indexOf(this.state.difficulty) === Object.values(NUMBER).length - 1}
                  onClick={this.onNextDifficulty}>
                  {'>'}
                </button>
              </div>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toGame}>
                {I18NHelper.get('memory.menu.play')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onBack}>
                {I18NHelper.get('memory.menu.back')}
              </button>
            </div>
          </div>

        </PageContainer>
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

