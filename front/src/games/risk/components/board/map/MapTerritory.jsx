import React from 'react'
import { connect } from 'react-redux'

import './_map.scss'

class MapTerritory extends React.Component {
  constructor (props) {
    super(props)
  }

  render () {
    console.log(this.props.territory.name)
    return (
      <div
        className='risk-map-territory'
        style={{background:this.props.continent.color}}>
        <div className='label'>
          {this.props.territory.name}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const territory = state.risk.data.territories.find((territory) => ownProps.territoryId === territory.id)
  const continent = state.risk.data.continents.find((continent) => territory.continent === continent.id)
  return {
    territory,
    continent 
  }
}

const mapDispatchToProps = dispatch => {
  return {}
}

const MapTerritoryContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MapTerritory)

export default MapTerritoryContainer
