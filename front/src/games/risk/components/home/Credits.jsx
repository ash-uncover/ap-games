import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import './_home.scss'

class Credits extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='risk-credits'>
        <div className='title'>
          Credits
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

const CreditsContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Credits)

export default CreditsContainer
