import React from 'react'
import PropTypes from 'prop-types'

import './_squaregrid.scss'

class SquareGrid extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      itemsPerLine: 1
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  /* LIFECYCLE */

  updateDimensions () {
    const ratio = this.container.clientWidth / this.container.clientHeight
    let seekRatio = this.props.children.length
    let lines = 1
    let result = seekRatio
    while(seekRatio > ratio) {
      lines += 1
      result = Math.ceil(this.props.children.length / lines)
      seekRatio = result / lines
    }
    this.setState({ itemsPerLine: Math.ceil(this.props.children.length / (lines - 1)) })
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

  buildItems () {
    const result = []
    for (let j = 0 ; j < this.props.children.length / this.state.itemsPerLine; j++) {
      result.push(
        <tr className='item'>
          {this.buildItemRow(j)}
        </tr>
      )
    }
    return result
  }

  buildItemRow (index) {
    const result = []
    for (let i = 0 ; i < this.state.itemsPerLine; i++) {
      if (index * this.state.itemsPerLine + i < this.props.children.length) {
        result.push(this.buildItem(index * this.state.itemsPerLine + i))
      } else {
        result.push(<td></td>)
      }
    }
    return result
  }

  buildItem(index) {
    return (
      <td className='item'>
        <div className='item-inner'>
          <div className='content'>
            {this.props.children[index]}
          </div>
        </div>
      </td>
    )
  }

  render () {
    return (
      <div className='squaregrid'
        ref={(c) => this.container = c}>
        <table
          className='container'>
          <tbody>
            {this.buildItems()}
          </tbody>
        </table>
      </div>
    )
  }
}

SquareGrid.propTypes = {
  children: PropTypes.oneOfType([
      PropTypes.arrayOf(PropTypes.node),
      PropTypes.node
  ])
}
SquareGrid.defaultProps = {
  children: null
}


export default SquareGrid
