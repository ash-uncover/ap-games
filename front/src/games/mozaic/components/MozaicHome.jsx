import React from 'react'
import { connect } from 'react-redux'
import PageContainer from 'components/commons/pagecontainer/PageContainer'

import ActionRegistry from 'core/actions/ActionRegistry'

import { FullscreenHelper } from 'utils-lib'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_mozaic.scss'

const PAGE = {
  MAIN: 0,
  OPTIONS: 1,
  CREDITS: 2,
  NEW_GAME: 3
}

const NUMBER = {
  3: 3, 4: 4, 5: 5, 6: 6, 7: 7
}

class MozaicHome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPage: 0,
      size: NUMBER[4]
    }

    this.toGame = this.toGame.bind(this)
    this.toOptions = this.toOptions.bind(this)
    this.toCredits = this.toCredits.bind(this)
    this.toNewGame = this.toNewGame.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onExitGame = this.onExitGame.bind(this)

    this.onPreviousSize = this.onPreviousSize.bind(this)
    this.onNextSize = this.onNextSize.bind(this)
  }

  // VIEW CALLBACKS //

  onPreviousSize () {
    const values = Object.values(NUMBER)
    const currentIndex = values.indexOf(this.state.size)
    const index = (currentIndex - 1 + values.length) % values.length
    this.setState({
      size: values[index]
    })
  }

  onNextSize () {
    const values = Object.values(NUMBER)
    const currentIndex = values.indexOf(this.state.size)
    const index = (currentIndex + 1) % values.length
    this.setState({
      size: values[index]
    })
  }

  toGame () {
    this.props.onNewGame(this.state.size)
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

  // RENDERING //

  render () {
    return (
      <div className='home'>
        <PageContainer page={this.state.currentPage}>
          
          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('mozaic.name')}
            </h2>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toNewGame}>
                {I18NHelper.get('mozaic.menu.newgame')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toOptions}>
                {I18NHelper.get('mozaic.menu.options')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toCredits}>
                {I18NHelper.get('mozaic.menu.credits')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onExitGame}>
                {I18NHelper.get('mozaic.menu.exit')}
              </button>
            </div>
          </div>

          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('mozaic.menu.options')}
            </h2>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onBack}>
                {I18NHelper.get('mozaic.menu.back')}
              </button>
            </div>
          </div>

          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('mozaic.menu.credits')}
            </h2>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onBack}>
                {I18NHelper.get('mozaic.menu.back')}
              </button>
            </div>
          </div>

          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('mozaic.menu.newgame')}
            </h2>
            <div className='entry'>
              <label className='label'>
                {I18NHelper.get('mozaic.difficulty')}
              </label>
            </div>
            <div className='entry'>
              <div className='selector'>
                <button
                  className='selector-action'
                  disabled={Object.values(NUMBER).indexOf(this.state.size) === 0}
                  onClick={this.onPreviousSize}>
                  {'<'}
                </button>
                <div className='selector-label'>
                  {I18NHelper.get(this.state.size)}
                </div>
                <button
                  className='selector-action'
                  disabled={Object.values(NUMBER).indexOf(this.state.size) === Object.values(NUMBER).length - 1}
                  onClick={this.onNextSize}>
                  {'>'}
                </button>
              </div>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toGame}>
                {I18NHelper.get('mozaic.menu.play')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onBack}>
                {I18NHelper.get('mozaic.menu.back')}
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
    onNewGame: (difficulty) => dispatch(ActionRegistry.mozaicStartGame(difficulty))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MozaicHome)

