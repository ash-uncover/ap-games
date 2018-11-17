import React from 'react'
import { connect } from 'react-redux'

import './_app.scss'

class AppHome extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  render () {
    return (
      <main className='app-home'>
        Welcome
      </main>
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
