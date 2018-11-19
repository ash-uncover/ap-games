import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import MenuButton from './MenuButton'
import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_home.scss'

class MainMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='main-menu'>
        <ul className='menu'>
          <li className='menu-entry'>
            <Link to={`${url}/new`}>
              <MenuButton>
                {I18NHelper.get('pendu.menu.newgame')}
              </MenuButton>
            </Link>
          </li>
          <li className='menu-entry'>
            <Link to={`${url}/options`}>
              <MenuButton>
                {I18NHelper.get('pendu.menu.options')}
              </MenuButton>
            </Link>
          </li>
          <li className='menu-entry'>
            <Link to={`${url}/credits`}>
              <MenuButton>
                {I18NHelper.get('pendu.menu.credits')}
              </MenuButton>
            </Link>
          </li>
          <li className='menu-entry'>
            <Link to={`/`}>
              <MenuButton>
                {I18NHelper.get('pendu.menu.exit')}
              </MenuButton>
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
