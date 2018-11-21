import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '../commons/Button'
import FullscreenHelper from 'utils-lib/FullscreenHelper'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_home.scss'

class MainMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  onExitGame () {
    FullscreenHelper.exitFullscreen()
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='main-menu'>
        <ul className='menu'>
          <li className='menu-entry'>
            <Link to={`${url}/new`}>
              <Button>
                {I18NHelper.get('pendu.menu.newgame')}
              </Button>
            </Link>
          </li>
          <li className='menu-entry'>
            <Link to={`${url}/options`}>
              <Button>
                {I18NHelper.get('pendu.menu.options')}
              </Button>
            </Link>
          </li>
          <li className='menu-entry'>
            <Link to={`${url}/credits`}>
              <Button>
                {I18NHelper.get('pendu.menu.credits')}
              </Button>
            </Link>
          </li>
          <li className='menu-entry'>
            <Link to={`/`}>
              <Button onClick={this.onExitGame}>
                {I18NHelper.get('pendu.menu.exit')}
              </Button>
            </Link>
          </li>
        </ul>
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

const MainMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)

export default MainMenuContainer
