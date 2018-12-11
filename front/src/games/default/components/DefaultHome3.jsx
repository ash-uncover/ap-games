import React from 'react'
import { connect } from 'react-redux'

import './_default.scss'

import SquareContainer from 'components/commons/squarecontainer/SquareContainer'

class DefaultHome extends React.Component {
  constructor (props) {
    super(props)
  }

  /* LIFECYCLE */

  /* INTERNAL METHODS */

  /* RENDERING */

  render () {
    const url = this.props.match.url
    return (
      <div className='home'>
        <SquareContainer>
          <div>1</div>
        </SquareContainer>
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

const DefaultHomeContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(DefaultHome)

export default DefaultHomeContainer
