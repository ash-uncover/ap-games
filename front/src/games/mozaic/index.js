import GameRegistry from 'core/games/GameRegistry'
import 'games/mozaic/actions/MozaicActions'
import MozaicReducer from 'games/mozaic/reducers/MozaicReducer'
import MozaicApp from 'games/mozaic/components/MozaicApp'

const MozaicGame = {
  id: 'mozaic',
  name: 'mozaic.name',
  icon: './src/games/mozaic/assets/img/logo.png',
  reducer: MozaicReducer,
  component: MozaicApp
}

GameRegistry.register(MozaicGame)
