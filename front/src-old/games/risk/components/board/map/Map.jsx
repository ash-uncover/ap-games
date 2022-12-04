import React from 'react'
import { connect } from 'react-redux'

import MapTerritory from './MapTerritory'

import './_map.scss'

class Map extends React.Component {
  constructor (props) {
    super(props)
  }

  /* RENDERING */

  buildRows() {
    const result = []
    for (let i = 0; i < this.props.rows; i++) {
      result.push(
        <div
          key={`map-row-${i}`}
          className='map-row'>
          {this.buildCols(i)}
        </div>
      )
    }
    console.log(result)
    return result
  }

  buildCols(rowIndex) {
    const result = []
    for (let i = 0; i < this.props.columns; i++) {
      const territory = this.props.territories.find((territory) => {
        const { x, y } = territory.graph
        return x === rowIndex && y === i
      })
      if (territory) {
        result.push(
          <div
            key={`map-col-${rowIndex}-${i}`}
            className='map-col'>
            <MapTerritory territoryId={territory.id} />
          </div>
        )
      } else {
        result.push(
          <div
            key={`map-col-${rowIndex}-${i}`}
            className='map-col' />
        )

      }
    }
    return result
  }

  render () {
    console.log(this.props)
    return (
      <div className='risk-map'>
        {this.buildRows()}
      </div>
    )
  }
}

const mapStateToProps = state => {
  const { territories, continents } = state.risk.data
  let nbRows = 0
  let nbCols = 0
  territories.forEach((territory) => {
    const { x, y } = territory.graph
    if (x > nbRows) nbRows = x
    if (y > nbCols) nbCols = y
  })
  return {
    rows: nbRows + 1,
    columns: nbCols + 1,
    territories: territories,
    continents: continents
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const MapContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Map)

export default MapContainer
