import React from 'react'

import SudokuTile from 'components/games/sudoku/SudokuTile.jsx'

import './Sudoku.css'

class SudokuSubGrid extends React.Component {
  constructor (props) {
    super(props)
  }

  _buildRows () {
    return [0, 1, 2].map(function (i) {
      return (
        <div key={i}>
          {this._buildItems(i)}
        </div>
      )
    }.bind(this))
  }

  _buildItems (i) {
    return [0, 1, 2].map(function (j) {
      return (
        <SudokuTile
          x={3 * this.props.x + i}
          y={3 * this.props.y + j}
          key={j}
          value={this.props.values[i][j]}
          onTileSelect={this.props.onTileSelect} />
      )
    }.bind(this))
  }

  render () {
    return (
      <div className='sudoku-subgrid'>
        {this._buildRows()}
      </div>
    )
  }
}

export default SudokuSubGrid
