import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './_home.scss'

class LoadMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='risk-load-menu'>
        <div className='title'>
          Load Menu
        </div>
        <Link to={`/risk`}>
          <button className='menu-entry'>
            {'back'}
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

const LoadMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoadMenu)

export default LoadMenuContainer
