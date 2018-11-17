import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './_home.scss'

class OptionMenu extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <div className='option-menu'>
        <div className='title'>
          Options
        </div>
        <Link to={`/pendu`}>
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

const OptionMenuContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(OptionMenu)

export default OptionMenuContainer
