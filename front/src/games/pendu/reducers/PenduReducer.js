import ActionRegistry from 'core/actions/ActionRegistry'

import PenduHelper from '../model/PenduHelper'

const defaultState = {
  data: {
    loaded: false,
    loading: false,
    loadingError: null
  },
  game: {
    started: false,
    finished: false,
    difficulty: null,
    gameLost: 0,
    gameWon: 0,
    current: {
      won: false,
      lost: false,
      startTime: null,
      endTime: null,
      letters: [],
      secret: []
    }
  }
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ActionRegistry.PENDU_LOAD_DATA_REQUEST:
      newState.data = {
        loading: true,
        loadingError: null
      }
      break

    case ActionRegistry.PENDU_LOAD_DATA_SUCCESS:
      newState.data = {
        loaded: true,
        loading: false,
        loadingError: null
      }
      break
    case ActionRegistry.PENDU_LOAD_DATA_FAILURE:
      newState.data = {
        loaded: false,
        loading: false,
        loadingError: action.args.error
      }
      break

    case ActionRegistry.PENDU_START_GAME: {
      const word = PenduData.WORDS[Math.floor((Math.random() * PenduData.WORDS.length))]
      const secret = []
      for (let i = 0; i < word.length; i++) {
        secret.push(word[i].toUpperCase())
      }
      newState.letters = []
      newState.secret = secret
      newState.game.difficulty = action.args.difficulty
      newState.game.started = true
      newState.game.finished = false
      newState.game.gameLost = 0
      newState.game.gameWon = 0
      newState.game.current = PenduHelper.initGame(action.args.difficulty)
      break
    }

    case ActionRegistry.PENDU_GIVE_UP_WORD: {
      newState.game.gameLost++
      newState.game.current.lost = true
      break
    }

    case ActionRegistry.PENDU_NEXT_WORD: {
      newState.game.current = PenduHelper.initGame(newState.game.difficulty)
      break
    }

    case ActionRegistry.PENDU_SEND_LETTER: {
      PenduHelper.addLetter(
        newState.game.current,
        action.args.letter
      )
      if (newState.game.current.won) {
        newState.game.gameWon++
      }
      if (newState.game.current.lost) {
        newState.game.gameLost++
      }
      break
    }

    case ActionRegistry.PENDU_END_GAME: {
      newState.game.finished = true
      break
    }
  }
  return newState
}

export default reducer
