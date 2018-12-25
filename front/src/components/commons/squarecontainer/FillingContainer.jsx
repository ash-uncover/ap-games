import React from 'react'
import PropTypes from 'prop-types'

import './_filling-container.scss'

class FillingContainer extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      width: 0,
      height: 0
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  /* LIFECYCLE */

  updateDimensions () {
    const parentRatio = this.container.clientWidth / this.container.clientHeight
    if (parentRatio === this.props.ratio) {
      console.log('same ratio')
      // parent ratio is ok
      this.setState({
        width: this.container.clientWidth,
        height: this.container.clientHeight
      })
    } else if (parentRatio < this.props.ratio) {
      console.log('height')
      // the blocking factor is the width
      this.setState({
        width: this.container.clientWidth,
        height: this.container.clientWidth / this.props.ratio
      })
    } else {
      console.log('width')
      // the blocking factor is the height
      this.setState({
        width: this.container.clientHeight * this.props.ratio,
        height: this.container.clientHeight
      })
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
    return {
      width: `${this.state.width}px`,
      height: `${this.state.height}px`
    }
  }

  render () {
    console.log(this.props)
    console.log(this.state)
    console.log(this.buildStyle())
    return (
      <div
        className='filling-container'
        ref={(c) => this.container = c}>
        <div
          className='filling-container-inner'
          style={this.buildStyle()}>
          <div
            className='filling-content'>
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

FillingContainer.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ]),
  ratio: PropTypes.number
}
FillingContainer.defaultProps = {
  children: null,
  ratio: 1
}

export default FillingContainer
