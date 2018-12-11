import ActionRegistry from 'core/actions/ActionRegistry'

import ArrayUtils from 'utils-lib/ArrayUtils'

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
    tries: 0,
    board: []
  }
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ActionRegistry.MOZAIC_LOAD_DATA_REQUEST:
      newState.data = {
        loading: true,
        loadingError: null
      }
      break

    case ActionRegistry.MOZAIC_LOAD_DATA_SUCCESS:
      newState.data = {
        loaded: true,
        loading: false,
        loadingError: null
      }
      break
    case ActionRegistry.MOZAIC_LOAD_DATA_FAILURE:
      newState.data = {
        loaded: false,
        loading: false,
        loadingError: action.args.error
      }
      break

    case ActionRegistry.MOZAIC_START_GAME: {
      const tilesNumber = action.args.size * action.args.size
      const tilesPosition = ArrayUtils.shuffle(ArrayUtils.createIntArray(tilesNumber))

      const board = tilesPosition.reduce((acc, tile, index) => {
        acc[tile] = {
          id: tile,
          hidden: index === tilesNumber - 1,
          baseX: tile % action.args.size,
          baseY: Math.floor(tile / action.args.size),
          x: index % action.args.size,
          y: Math.floor(index / action.args.size)
        }
        return acc
      }, {})

      newState.game = {
        startTime: new Date(),
        endTime: null,
        won: false,
        lost: false,
        tries: 0,
        size: action.args.size,
        board
      }
      break
    }

    case ActionRegistry.MOZAIC_CLICK_TILE: {
      const tile = newState.game.board[action.args.tileId]
      const lastTile = newState.game.board[Object.keys(newState.game.board).length - 1]
      if (lastTile.x === tile.x - 1 && lastTile.y === tile.y) {
        lastTile.x = lastTile.x + 1
        tile.x = tile.x - 1
      } else if (lastTile.x === tile.x + 1 && lastTile.y === tile.y) {
        lastTile.x = lastTile.x - 1
        tile.x = tile.x + 1
      } else if (lastTile.y === tile.y - 1 && lastTile.x === tile.x) {
        lastTile.y = lastTile.y + 1
        tile.y = tile.y - 1
      } else if (lastTile.y === tile.y + 1 && lastTile.x === tile.x) {
        lastTile.y = lastTile.y - 1
        tile.y = tile.y + 1
      }

      newState.game.tries += newState.game.tries

      newState.game.won = !Object.values(newState.game.board).some((tile) => {
        return tile.x !== tile.baseX || tile.y !== tile.baseY
      })

      if (newState.game.won) {
        newState.game.endTime = new Date()
      }

      break
    }

    case ActionRegistry.MOZAIC_END_GAME: {
      newState.game.endTime = new Date()
      newState.game.lost = true
      break
    }
  }
  return newState
}

export default reducer
