import GameRegistry from 'core/games/GameRegistry'
import 'games/minehunter/actions/MinehunterActions'
import MinehunterReducer from 'games/minehunter/reducers/MinehunterReducer'
import MinehunterApp from 'games/minehunter/components/MinehunterApp'

const MinehunterGame = {
  id: 'minehunter',
  name: 'minehunter.name',
  icon: '/src/games/minehunter/assets/img/icon.svg',
  reducer: MinehunterReducer,
  component: MinehunterApp
}

GameRegistry.register(MinehunterGame)
