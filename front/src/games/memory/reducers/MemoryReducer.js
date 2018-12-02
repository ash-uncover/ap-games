import ActionRegistry from 'core/actions/ActionRegistry'

import ArrayUtils from 'utils-lib/ArrayUtils'
import MemoryHelper from '../model/MemoryHelper'
import MemoryData from '../model/MemoryData'

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
    errors: 0,
    found: 0,
    difficulty: null,
    board: [],
    blocked: false
  }
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ActionRegistry.MEMORY_LOAD_DATA_REQUEST:
      newState.data = {
        loading: true,
        loadingError: null
      }
      break

    case ActionRegistry.MEMORY_LOAD_DATA_SUCCESS:
      newState.data = {
        loaded: true,
        loading: false,
        loadingError: null
      }
      break
    case ActionRegistry.MEMORY_LOAD_DATA_FAILURE:
      newState.data = {
        loaded: false,
        loading: false,
        loadingError: action.args.error
      }
      break

    case ActionRegistry.MEMORY_START_GAME: {
      const baseItems = ArrayUtils.randomSubArray(MemoryData.ITEMS, action.args.difficulty.items)
      const items = ArrayUtils.shuffle([].concat(baseItems).concat(baseItems))
      newState.game = {
        startTime: new Date(),
        endTime: null,
        won: false,
        errors: 0,
        found: 0,
        blocked: false,
        difficulty: action.args.difficulty,
        board: items.map((item, index) => ({
          id: index,
          item,
          revealed: false,
          found: false
        }))
      }
      break
    }

    case ActionRegistry.MEMORY_REVEAL_CARD: {
      newState.game.board.find((card) => card.id === action.args.card.id).revealed = true
      const revealedCards = MemoryHelper.getRevealedCards(newState.game.board)
      if (revealedCards.length === 2) {
        if (revealedCards[0].item.id === revealedCards[1].item.id) {
          revealedCards[0].found = true
          revealedCards[0].revealed = false
          revealedCards[1].found = true
          revealedCards[1].revealed = false
          newState.game.found += 1
          if (newState.found === newState.game.board.length / 2) {
            newState.game.won = true
            newState.game.endTime = new Date()
          }
        } else {
          newState.game.errors += 1
          newState.game.blocked = true
        }
      }
      break
    }

    case ActionRegistry.MEMORY_UNREVEAL_CARDS: {
      MemoryHelper.getRevealedCards(newState.game.board).forEach(card => {
        card.revealed = false
      })
      newState.game.blocked = false
      break
    }

    case ActionRegistry.MEMORY_REVEAL_ALL: {
      newState.game.board.forEach((card) => {
        card.revealed = true
      })
      newState.game.endTime = new Date()
      break
    }

    case ActionRegistry.MEMORY_END_GAME: {
      newState.game = defaultState.game
      break
    }
  }
  return newState
}

export default reducer
