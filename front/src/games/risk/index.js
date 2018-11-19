import GameRegistry from 'core/games/GameRegistry'
import RiskActions from './actions/RiskActions'
import RiskReducer from './reducers/RiskReducer'
import Risk from './components/Risk'

const RiskGame = {
  id: 'risk',
  name: 'risk.name',
  icon: '/src/games/risk/assets/img/icon.png',
  actions: RiskActions,
  reducer: RiskReducer,
  component: Risk
}

GameRegistry.register(RiskGame)
