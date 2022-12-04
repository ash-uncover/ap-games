import GameRegistry from 'core/games/GameRegistry'
import 'games/default/actions/DefaultActions'
import DefaultReducer from 'games/default/reducers/DefaultReducer'
import DefaultApp from 'games/default/components/DefaultApp'

const DefaultGame = {
  id: 'default',
  name: 'default.name',
  icon: '/src/games/default/assets/img/icon.svg',
  reducer: DefaultReducer,
  component: DefaultApp
}

GameRegistry.register(DefaultGame)
