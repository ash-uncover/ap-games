import GameRegistry from 'core/games/GameRegistry'
import RiskActions from './actions/RiskActions'
import RiskReducer from './reducers/RiskReducer'
import Risk from './components/Risk'

const RiskGame = {
  id: 'risk',
  name: 'risk.name',
  reducer: RiskReducer,
  component: Risk
}

GameRegistry.register(RiskGame)
