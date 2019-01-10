import GameRegistry from 'core/games/GameRegistry'
import 'games/memory/actions/MemoryActions'
import MemoryReducer from './reducers/MemoryReducer'
import MemoryApp from './components/MemoryApp'

const MemoryGame = {
  id: 'memory',
  name: 'memory.name',
  icon: './src/games/memory/assets/img/_Castle.svg',
  reducer: MemoryReducer,
  component: MemoryApp
}

GameRegistry.register(MemoryGame)
