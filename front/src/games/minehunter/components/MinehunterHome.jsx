import React from 'react'
import { connect } from 'react-redux'

import PageContainer from 'components/commons/pagecontainer/PageContainer'

import ActionRegistry from 'core/actions/ActionRegistry'
import MinehunterData from '../model/MinehunterData'
import { FullscreenHelper } from 'utils-lib'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_minehunter.scss'

const PAGE = {
  MAIN: 0,
  OPTIONS: 1,
  CREDITS: 2,
  NEW_GAME: 3
}

const NUMBER = {
  '10x10': '10x10',
  '10x15': '10x15'
}

class MinehunterHome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentPage: 0,
      difficulty: Object.values(MinehunterData.DIFFICULTIES)[0].id
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

  /* LIFECYCLE */

  updateDimensions () {
    
  }

  /* VIEW CALLBACKS */

  toGame () {
    const {
      width,
      height,
      bombs
    } = MinehunterData.DIFFICULTIES[this.state.difficulty]
    this.props.onNewGame(width, height, bombs)
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
    const values = Object.values(MinehunterData.DIFFICULTIES)
    const currentIndex = values.findIndex((value) => value.id === this.state.difficulty)
    const index = (currentIndex - 1 + values.length) % values.length
    this.setState({
      difficulty: values[index].id
    })
  }

  onNextDifficulty () {
    const values = Object.values(MinehunterData.DIFFICULTIES)
    const currentIndex = values.findIndex((value) => value.id === this.state.difficulty)
    const index = (currentIndex + 1) % values.length
    this.setState({
      difficulty: values[index].id
    })
  }

  /* INTERNAL METHODS */


  /* RENDERING */

  render () {
    return (
      <div className='home'>
        <PageContainer page={this.state.currentPage}>
          
          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('minehunter.name')}
            </h2>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toNewGame}>
                {I18NHelper.get('minehunter.menu.newgame')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toOptions}>
                {I18NHelper.get('minehunter.menu.options')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toCredits}>
                {I18NHelper.get('minehunter.menu.credits')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onExitGame}>
                {I18NHelper.get('minehunter.menu.exit')}
              </button>
            </div>
          </div>

          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('minehunter.menu.options')}
            </h2>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onBack}>
                {I18NHelper.get('minehunter.menu.back')}
              </button>
            </div>
          </div>

          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('minehunter.menu.credits')}
            </h2>
            <div>Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onBack}>
                {I18NHelper.get('minehunter.menu.back')}
              </button>
            </div>
          </div>

          <div className='page-content'>
            <h2
              className='title'>
              {I18NHelper.get('minehunter.menu.newgame')}
            </h2>
            <div className='entry'>
              <label className='label'>
                {I18NHelper.get('minehunter.menu.difficulty')}
              </label>
            </div>
            <div className='entry'>
              <div className='selector'>
                <button
                  className='selector-action'
                  disabled={Object.values(MinehunterData.DIFFICULTIES).findIndex((value) => value.id === this.state.difficulty) === 0}
                  onClick={this.onPreviousDifficulty}>
                  {'<'}
                </button>
                <div className='selector-label'>
                  {I18NHelper.get(MinehunterData.DIFFICULTIES[this.state.difficulty].text)}
                </div>
                <button
                  className='selector-action'
                  disabled={Object.values(MinehunterData.DIFFICULTIES).findIndex((value) => value.id === this.state.difficulty) === Object.values(MinehunterData.DIFFICULTIES).length - 1}
                  onClick={this.onNextDifficulty}>
                  {'>'}
                </button>
              </div>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.toGame}>
                {I18NHelper.get('minehunter.menu.play')}
              </button>
            </div>
            <div className='entry'>
              <button
                className='action'
                onClick={this.onBack}>
                {I18NHelper.get('minehunter.menu.back')}
              </button>
            </div>
          </div>

        </PageContainer>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {
    onNewGame: (width, height, bombs) => dispatch(ActionRegistry.minehunterStartGame(width, height, bombs))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MinehunterHome)
