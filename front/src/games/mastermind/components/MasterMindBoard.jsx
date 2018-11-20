import React from 'react'

import MasterMindRow from 'components/games/mastermind/MasterMindRow.jsx'
import MasterMindSelect from 'components/games/mastermind/MasterMindSelect.jsx'

import './MasterMind.css'

class MasterMindBoard extends React.Component {
  constructor (props) {
    super(props)
  }

  _buildRows () {
    let result = []
    for (var i = this.props.history.length - 1; i >= 0; i--) {
      result.push(<MasterMindRow key={i} items={this.props.history[i].items} />)
    }
    return result
  }

  render () {
    return (
      <div className='mastermind-board'>
        <MasterMindSelect
          items={this.props.current}
          onTileClick={this.props.onTileClick}
          onRowValidate={this.props.onRowValidate}
          size={4} />
        {this._buildRows()}
      </div>
    )
  }
}

export default MasterMindBoard
