import GameRegistry from 'core/games/GameRegistry'
import 'games/pendu/actions/PenduActions'
import PenduReducer from './reducers/PenduReducer'
import Pendu from './components/Pendu'

const PenduGame = {
  id: 'pendu',
  name: 'pendu.name',
  icon: './src/games/pendu/assets/img/icon.svg',
  reducer: PenduReducer,
  component: Pendu
}

GameRegistry.register(PenduGame)
