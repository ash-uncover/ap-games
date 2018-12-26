import React from 'react'
import { connect } from 'react-redux'

import FillingContainer from 'components/commons/squarecontainer/FillingContainer'

import './_minehunter.scss'

class MinehunterHome extends React.Component {
  constructor (props) {
    super(props)
  }

  /* LIFECYCLE */

  updateDimensions () {
    
  }

  /* INTERNAL METHODS */


  /* RENDERING */

  render () {
    const url = this.props.match.url
    return (
      <div className='home'>
        <button>Minehunter</button>


        <FillingContainer ratio={5}>
          <button>inside</button>
        </FillingContainer>
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

export default connect(mapStateToProps, mapDispatchToProps)(MinehunterHome)
