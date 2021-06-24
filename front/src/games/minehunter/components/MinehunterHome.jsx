import React from 'react'
import { connect } from 'react-redux'

import Menu from 'components/commons/menu/Menu'
import MenuPage from 'components/commons/menu/MenuPage'
import MenuLabel from 'components/commons/menu/MenuLabel'
import MenuAction from 'components/commons/menu/MenuAction'
import MenuSelector from 'components/commons/menu/MenuSelector'

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

class MinehunterHome extends React.Component {
  constructor (props) {
    super(props)

    const difficulty = Object.values(MinehunterData.DIFFICULTIES)[0]

    this.state = {
      currentPage: 0,
      difficulty: difficulty.id,
      hasPrevious: false,
      hasNext: true,
      width: difficulty.width,
      height: difficulty.height,
      bombs: difficulty.bombs
    }

    this.toGame = this.toGame.bind(this)
    this.toOptions = this.toOptions.bind(this)
    this.toCredits = this.toCredits.bind(this)
    this.toNewGame = this.toNewGame.bind(this)
    this.onBack = this.onBack.bind(this)
    this.onExitGame = this.onExitGame.bind(this)

    this.onPreviousDifficulty = this.onPreviousDifficulty.bind(this)
    this.onNextDifficulty = this.onNextDifficulty.bind(this)
    this.onLessWidth = this.onLessWidth.bind(this)
    this.onMoreWidth = this.onMoreWidth.bind(this)
    this.onLessHeight = this.onLessHeight.bind(this)
    this.onMoreHeight = this.onMoreHeight.bind(this)
    this.onLessBombs = this.onLessBombs.bind(this)
    this.onMoreBombs = this.onMoreBombs.bind(this)
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
    } = this.state
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
    this._updateDifficulty(index)
  }

  onNextDifficulty () {
    const values = Object.values(MinehunterData.DIFFICULTIES)
    const currentIndex = values.findIndex((value) => value.id === this.state.difficulty)
    const index = (currentIndex + 1) % values.length
    this._updateDifficulty(index)
  }

  onLessWidth () {
    this.setState({
      width: Math.max(this.state.width - 1, MinehunterData.MIN_WIDTH)
    })
  }

  onMoreWidth () {
    this.setState({
      width: Math.min(this.state.width + 1, MinehunterData.MAX_WIDTH)
    })
  }

  onLessHeight () {
    this.setState({
      height: Math.max(this.state.height - 1, MinehunterData.MIN_HEIGHT)
    })
  }

  onMoreHeight () {
    this.setState({
      height: Math.min(this.state.height + 1, MinehunterData.MAX_WIDTH)
    })
  }

  onLessBombs () {
    this.setState({
      bombs: Math.max(this.state.bombs - 1, MinehunterData.MIN_BOMBS)
    })
  }

  onMoreBombs () {
    const maxBombs = (this.state.width - 1) * (this.state.height - 1)
    this.setState({
      bombs: Math.min(this.state.bombs + 1, maxBombs)
    })
  }

  /* INTERNAL METHODS */

  _updateDifficulty (index) {
    const values = Object.values(MinehunterData.DIFFICULTIES)
    const hasPrevious = index > 0
    const hasNext = index < values.length - 1
    const difficulty = values[index]
    if (difficulty.width) {
      this.setState({
        difficulty: difficulty.id,
        hasPrevious,
        hasNext, 
        width: difficulty.width,
        height: difficulty.height,
        bombs: difficulty.bombs,
        canEditDifficulty: false
      })
    } else {
      this.setState({
        difficulty: difficulty.id,
        hasPrevious,
        hasNext,
        canEditDifficulty: true
      })
    }
  }

  /* RENDERING */

  render () {
    return (
      <div className='home'>
        <Menu
          page={this.state.currentPage}>
          <MenuPage
            title={I18NHelper.get('minehunter.name')}>
            <MenuAction
              text={I18NHelper.get('minehunter.menu.newgame')}
              onClick={this.toNewGame} />
            <MenuAction
              text={I18NHelper.get('minehunter.menu.options')}
              onClick={this.toOptions} />
            <MenuAction
              text={I18NHelper.get('minehunter.menu.credits')}
              onClick={this.toCredits} />
            <MenuAction
              text={I18NHelper.get('minehunter.menu.exit')}
              onClick={this.onExitGame} />
          </MenuPage>

          <MenuPage
            title={I18NHelper.get('minehunter.menu.options')}>
            <MenuAction
              text={I18NHelper.get('minehunter.menu.back')}
              onClick={this.onBack} />
          </MenuPage>

          <MenuPage
            title={I18NHelper.get('minehunter.menu.credits')}>
            <div>
              Icons made by <a href="https://www.flaticon.com/authors/roundicons" title="Roundicons">Roundicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a>
            </div>
            <MenuAction
              text={I18NHelper.get('minehunter.menu.back')}
              onClick={this.onBack} />
          </MenuPage>

          <MenuPage
            title={I18NHelper.get('minehunter.menu.newgame')}>
            <MenuSelector
              label={I18NHelper.get('minehunter.menu.difficulty')}
              value={I18NHelper.get(MinehunterData.DIFFICULTIES[this.state.difficulty].text)}
              previousValueDisabled={!this.state.hasPrevious}
              nextValueDisabled={!this.state.hasNext}
              onPreviousValue={this.onPreviousDifficulty}
              onNextValue={this.onNextDifficulty} />
            <MenuSelector
              label={I18NHelper.get('minehunter.game.difficulty.width')}
              value={this.state.width}
              previousValueDisabled={!this.state.canEditDifficulty}
              nextValueDisabled={!this.state.canEditDifficulty}
              onPreviousValue={this.onLessWidth}
              onNextValue={this.onMoreWidth} />
            <MenuSelector
              label={I18NHelper.get('minehunter.game.difficulty.height')}
              value={this.state.height}
              previousValueDisabled={!this.state.canEditDifficulty}
              nextValueDisabled={!this.state.canEditDifficulty}
              onPreviousValue={this.onLessHeight}
              onNextValue={this.onMoreHeight} />
            <MenuSelector
              label={I18NHelper.get('minehunter.game.difficulty.bombs')}
              value={this.state.bombs}
              previousValueDisabled={!this.state.canEditDifficulty}
              nextValueDisabled={!this.state.canEditDifficulty}
              onPreviousValue={this.onLessBombs}
              onNextValue={this.onMoreBombs} />
            <MenuAction
              text={I18NHelper.get('minehunter.menu.play')}
              onClick={this.toGame} />
            <MenuAction
              text={I18NHelper.get('minehunter.menu.back')}
              onClick={this.onBack} />
          </MenuPage>

        </Menu>
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
