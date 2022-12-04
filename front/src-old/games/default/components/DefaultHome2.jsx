import React from 'react'
import { connect } from 'react-redux'

import './_default.scss'

import SquareGrid from 'components/commons/squaregrid/SquareGrid'

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
        <SquareGrid>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
        </SquareGrid>
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
