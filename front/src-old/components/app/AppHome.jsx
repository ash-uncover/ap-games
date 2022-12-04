import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AppConcept from './concept/AppConcept'
import AppGames from './games/AppGames'

import GameRegistry from 'core/games/GameRegistry'

import { FullscreenHelper, I18NHelper } from 'utils-lib'

import './_app.scss'

class AppHome extends React.Component {
  constructor (props) {
    super(props)

    this.state = {
      currentTab: 0
    }
  }

  /* VIEW CALLBACKS */

  onOpenGame () {
    FullscreenHelper.requestFullscreen(document.documentElement)
  }

  selectTab (index) {
    if (index !== this.state.currentTab) {
      this.setState({ currentTab: index })
    }
  }

  /* RENDERING */

  buildTabClassName(index) {
    let result = 'app-menu-tab'
    if (index === this.state.currentTab) {
      result += ' current'
    }
    return result
  }

  render () {
    return (
      <div className='app-home'>
        <header className='app-toolbar'>
          <nav>
            <ul>
              {I18NHelper.get('app:welcome')}
            </ul>
          </nav>
        </header>
        <div className='app-menu'>
          <button
            className={this.buildTabClassName(0)}
            onClick={this.selectTab.bind(this, 0)}>
            {I18NHelper.get('app:tabs.games')}
          </button>
          <button
            className={this.buildTabClassName(1)}
            onClick={this.selectTab.bind(this, 1)}>
            {I18NHelper.get('app:tabs.concept')}
          </button>
        </div>
        <div className='app-content'>
          <div className='app-tab'>
            <AppGames />
          </div>
          <div className='app-tab'>
            <AppConcept />
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {}
}

const mapDispatchToProps = (dispatch) => {
  return {}
}

const AppHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppHome)

export default AppHomeContainer
