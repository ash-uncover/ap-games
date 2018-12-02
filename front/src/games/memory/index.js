import GameRegistry from 'core/games/GameRegistry'
import MemoryActions from './actions/MemoryActions'
import MemoryReducer from './reducers/MemoryReducer'
import MemoryApp from './components/MemoryApp'

const MemoryGame = {
  id: 'memory',
  name: 'memory.name',
  icon: '/src/games/memory/assets/img/icon.svg',
  actions: MemoryActions,
  reducer: MemoryReducer,
  component: MemoryApp
}

GameRegistry.register(MemoryGame)
