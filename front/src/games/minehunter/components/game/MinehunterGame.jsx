import React from 'react'
import { connect } from 'react-redux'

import './_minehunter-game.scss'

class MinehunterGame extends React.Component {
  constructor (props) {
    super(props)
  }

  /* LIFECYCLE */


  /* RENDERING */

  render () {
    const url = this.props.match.url
    return (
      <div className='minehunter-game'>
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

export default connect(mapStateToProps, mapDispatchToProps)(MinehunterGame)

