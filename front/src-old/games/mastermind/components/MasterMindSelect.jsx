import React from 'react'

import MasterMindTile from 'components/games/mastermind/MasterMindTile.jsx'

import './MasterMind.css'

class MasterMindSelect extends React.Component {
  constructor (props) {
    super(props)
  }

  _buildTiles () {
    return this.props.items.map(function (c, i) {
      return (
        <MasterMindTile
          onClick={this.props.onTileClick}
          color={c}
          key={i}
          index={i} />
      )
    }.bind(this))
  }

  render () {
    var okEnable = true
    for (let i = 0; i < this.props.items.length; i++) {
      okEnable &= (this.props.items[i] !== null)
    }
    return (
      <div className='mastermind-select'>
        {this._buildTiles()}
        <button disabled={!okEnable} onClick={this.props.onRowValidate}>OK</button>
      </div>
    )
  }
}

export default MasterMindSelect
