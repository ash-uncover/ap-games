import React from 'react'

import SudokuGrid from 'components/games/sudoku/SudokuGrid.jsx'

import './Sudoku.css'

class SudokuBoard extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    return (
      <SudokuGrid onTileSelect={this.props.onTileSelect} values={this.props.values} />
    )
  }
}

export default SudokuBoard
