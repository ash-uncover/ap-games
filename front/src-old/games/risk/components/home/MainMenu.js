import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './_home.scss'

class MainMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='risk-main-menu'>
        <div className='title'>
          Main Menu
        </div>
        <Link to={`${url}/new`}>
          <button className='menu-entry'>
            {'new game'}
          </button>
        </Link>
        <Link to={`${url}/load`}>
          <button className='menu-entry'>
            {'load game'}
          </button>
        </Link>
        <Link to={`${url}/options`}>
          <button className='menu-entry'>
            {'options'}
          </button>
        </Link>
        <Link to={`${url}/credits`}>
          <button className='menu-entry'>
            {'credits'}
          </button>
        </Link>
        <Link to='/'>
          <button className='menu-entry'>
            {'exit'}
          </button>
        </Link>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {}
}

const mapDispatchToProps = dispatch => {
  return {}
}

const MainMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MainMenu)

export default MainMenuContainer
