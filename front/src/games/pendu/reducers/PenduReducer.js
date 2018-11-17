import ActionRegistry from 'core/actions/ActionRegistry'
import PenduData from '../model/PenduData'

const defaultState = {
  data: {
    loaded: false,
    loading: false,
    loadingError: null
  },
  difficulty: 0,
  letters: [],
  secret: []
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
      break
    }
    
    case ActionRegistry.PENDU_SEND_LETTER: {
      const letter = action.args.letter.toUpperCase()
      if (newState.letters.indexOf(letter) === -1) {
        newState.letters.push(letter)
      }
      break
    }
  }
  return newState
}

export default reducer
