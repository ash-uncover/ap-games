import React from 'react'

import './MasterMind.css'

class MasterMindTile extends React.Component {
  constructor (props) {
    super(props)
  }

  _onTileClick (event) {
    event.preventDefault()
    if (this.props.onClick) {
      this.props.onClick(this.props.index)
    }
  }

  render () {
    return (
      <div
        className='mastermind-tile'
        style={this.props.color ? { background: this.props.color } : {}}
        onClick={this._onTileClick.bind(this)} />
    )
  }
}

export default MasterMindTile
