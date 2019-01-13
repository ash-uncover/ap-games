import ActionRegistry from 'core/actions/ActionRegistry'
import MinehunterHelper from '../model/MinehunterHelper'
import MinehunterData from '../model/MinehunterData'

const defaultState = {
  data: {
    loaded: false,
    loading: false,
    loadingError: null
  },
  game: {
    startTime: null,
    endTime: null,
    won: false,
    lost: false,
    selectMode: 'reveal',
    grid: []
  }
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ActionRegistry.MINEHUNTER_LOAD_DATA_REQUEST:
      newState.data = {
        loading: true,
        loadingError: null
      }
      break

    case ActionRegistry.MINEHUNTER_LOAD_DATA_SUCCESS:
      newState.data = {
        loaded: true,
        loading: false,
        loadingError: null
      }
      break
    case ActionRegistry.MINEHUNTER_LOAD_DATA_FAILURE:
      newState.data = {
        loaded: false,
        loading: false,
        loadingError: action.args.error
      }
      break

    case ActionRegistry.MINEHUNTER_START_GAME: {
      const { width, height, bombs } = action.args
      newState.game = {
        startTime: new Date(),
        endTime: null,
        won: false,
        lost: false,
        grid: MinehunterHelper.createGrid(width, height, bombs)
      }
      break
    }

    case ActionRegistry.MINEHUNTER_SET_SELECT_MODE: {
      newState.game.selectMode = action.args.selectMode || 'reveal'
      break
    }

    case ActionRegistry.MINEHUNTER_REVEAL_TILE: {
      const initialTile = newState.game.grid[action.args.x][action.args.y]
      switch (newState.game.selectMode) {
        case 'flag':
          initialTile.flag = !initialTile.flag
          initialTile.question = false
          newState.game.selectMode = 'reveal'
          break
        case 'question':
          initialTile.question = !initialTile.question
          initialTile.flag = false
          newState.game.selectMode = 'reveal'
          break
        case 'reveal':
        default:
          if (!initialTile.flag && !initialTile.question) {
            if (initialTile.bomb) {
              newState.game.lost = true
              newState.game.endTime = new Date()
            } else {
              if (initialTile.near) {
                initialTile.revealed = true
              } else {
                let revealedTiles = [ initialTile ]
                while (revealedTiles.length) {
                  revealedTiles = revealedTiles.reduce((acc, tile) => {
                    tile.revealed = true
                    if (tile.near) {
                      return acc
                    } else {
                      const neighboors = MinehunterHelper.getNeighboors(newState.game.grid, tile.x, tile.y)
                      const newTiles = neighboors.filter((t) => !t.revealed && !t.flag && !t.question)
                      return acc.concat(newTiles)
                    }
                  }, [])
                }
              }
            }
            // Check if the game is won
            newState.game.won = !newState.game.grid.find((row) => row.find((cell) => !cell.bomb && !cell.revealed))
          }
          break
      }
      break
    }

    case ActionRegistry.MINEHUNTER_END_GAME: {
      newState.game.lost = true
      break
    }
  }
  return newState
}

export default reducer
