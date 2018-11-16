import ActionRegistry from 'core/actions/ActionRegistry'

const defaultState = {
  letters: [],
  word: []
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case ActionRegistry.PENDU_START_GAME:
      return newState
    case ActionRegistry.PENDU_SEND_LETTER: {
      return newState
    }
    default:
      return state
  }
}

export default reducer
