import React from 'react'
import PropTypes from 'prop-types'

import './_square-container.scss'

class SquareContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      size: 0
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  /* LIFECYCLE */

  updateDimensions () {
    if (this.container.clientWidth > this.container.clientHeight) {
      this.setState({ size: this.container.clientHeight })
    } else {
      this.setState({ size: 0 })
    }
  }

  componentDidMount () {
    this.updateDimensions()
    window.addEventListener('resize', this.updateDimensions)
  }
  
  componentWillUnmount () {
    window.removeEventListener('resize', this.updateDimensions)
  }

  /* INTERNAL METHODS */


  /* RENDERING */

  buildStyle () {
    if (this.state.size) {
      return {
        width: `${this.state.size}px`,
        paddingTop: `${this.state.size}px`
      }
    }
    return {}
  }

  render () {
    return (
      <div
        className='square-container'
        ref={(c) => this.container = c}>
        <div
          className='square-container-inner'
          style={this.buildStyle()}>
          <div
            className='square-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

SquareContainer.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ])
}
SquareContainer.defaultProps = {
  children: null
}

export default SquareContainer
