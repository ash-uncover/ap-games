import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import I18NHelper from 'utils-lib/i18n/I18NHelper'

import './_home.scss'

class MainMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='home'>
        <ul>
          <li>
            <Link to={`${url}/new`}>
              <button className='menu-entry'>
                {I18NHelper.get('pendu.menu.newgame')}
              </button>
            </Link>
          </li>
          <li>
            <Link to={`${url}/options`}>
              <button className='menu-entry'>
              {I18NHelper.get('pendu.menu.options')}
              </button>
            </Link>
          </li>
          <li>
            <Link to={`${url}/credits`}>
              <button className='menu-entry'>
              {I18NHelper.get('pendu.menu.credits')}
              </button>
            </Link>
          </li>
          <li>
            <Link to={`/`}>
              <button className='menu-entry'>
              {I18NHelper.get('pendu.menu.exit')}
              </button>
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
