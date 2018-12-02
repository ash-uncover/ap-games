import GameRegistry from 'core/games/GameRegistry'
import DefaultActions from './actions/DefaultActions'
import DefaultReducer from './reducers/DefaultReducer'
import DefaultApp from './components/DefaultApp'

const DefaultGame = {
  id: 'default',
  name: 'default.name',
  icon: '/src/games/default/assets/img/icon.svg',
  actions: DefaultActions,
  reducer: DefaultReducer,
  component: DefaultApp
}

GameRegistry.register(DefaultGame)
