import ActionRegistry from 'core/actions/ActionRegistry'

const defaultState = {
  data: {
    loaded: false,
    loading: false,
    loadingError: null,
    territories: [],
    continents: []
  },
  currentPlayer: null,
  currentPhase: null,
  players: [], // ordered 
  world: {}
}

const checkLoadTerritoryLinks = function (territories, links) {
  links.forEach((link) => {
    const territory1 = findTerritory(territories, link[0])
    const territory2 = findTerritory(territories, link[1])
    territory1.links = territory1.links || []
    territory1.links.push(links[1])
    territory2.links = territory2.links || []
    territory2.links.push(links[0])
  })
}

const findTerritory = function (territories, territoryId) {
  return territories.find((territory) => territory.id === territoryId)
}

const findContinent = function (continents, continentId) {
  return continents.find((continent) => continent.id === continentId)
}

const checkContinentConsistency = function () {

}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ActionRegistry.RISK_LOAD_DATA_REQUEST:
      newState.data.loaded = false
      newState.data.loading = true
      newState.data.loadingError = null
      return newState
    case ActionRegistry.RISK_LOAD_DATA_SUCCESS: {
      const { territories, territoriesLinks, continents } = action.args.result
      checkLoadTerritoryLinks(territories, territoriesLinks)
      newState.data.loaded = true
      newState.data.loading = false
      newState.data.territories = territories
      newState.data.continents = continents
      return newState
    }
    case ActionRegistry.RISK_LOAD_DATA_FAILURE:
      newState.data.loading = false
      newState.data.loadingError = action.args.error
      return newState
    default:
      return state
  }
}

export default reducer
