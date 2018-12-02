import React from 'react'
import { connect } from 'react-redux'

import './_default.scss'

class DefaultHome extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      items: 60,
      itemsPerLine: 1
    }
    this.updateDimensions = this.updateDimensions.bind(this)
  }

  /* LIFECYCLE */

  updateDimensions () {
    const ratio = this.container.clientWidth / this.container.clientHeight
    let seekRatio = this.state.items
    let lines = 1
    let result = this.state.items
    while(seekRatio > ratio) {
      lines += 1
      result = Math.ceil(this.state.items / lines)
      seekRatio = result / lines
    }
    this.setState({ itemsPerLine: Math.ceil(this.state.items / (lines - 1)) })
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
    for (let j = 0 ; j < this.state.items / this.state.itemsPerLine; j++) {
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
      if (index * this.state.itemsPerLine + i < this.state.items) {
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
            {index}
          </div>
        </div>
      </td>
    )
  }

  render () {
    const url = this.props.match.url
    return (
      <div className='home'
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
