import DobbleCards from 'game-data/dobble/DobbleCards'
import DobbleGame from 'game-data/dobble/DobbleGame'
import { DOBBLE_START_GAME, DOBBLE_SELECT_SYMBOL, DOBBLE_FINISH_GAME } from 'actions/dobble'
import { ArrayUtils } from 'utils-lib'

const defaultState = {
  startTime: null,
  finishTime: null,
  state: 'NOT_STARTED',
  errors: 0,
  cardsLeft: [],
  cardsFound: []
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case DOBBLE_START_GAME:
      let cards = ArrayUtils.shuffle(DobbleCards.CARDS)
      let card = cards.pop()
      return {
        startTime: new Date().getTime(),
        finishTime: null,
        state: 'STARTED',
        errors: 0,
        cardsLeft: cards,
        cardsFound: [ card ]
      }
    case DOBBLE_SELECT_SYMBOL:
      let card1 = state.cardsLeft[state.cardsLeft.length - 1]
      let card2 = state.cardsFound[state.cardsFound.length - 1]
      let result = DobbleGame.isCommonSymbol(card1.id, card2.id, action.args.symbolId)
      if (result) {
        state.cardsFound.push(state.cardsLeft.pop())
        return Object.assign({}, state, {
          cardsLeft: [].concat(state.cardsLeft),
          cardsFound: [].concat(state.cardsFound),
          state: state.cardsLeft.length ? 'STARTED' : 'FINISHED',
          finishTime: state.cardsLeft.length ? null : new Date().getTime()
        })
      }
      return Object.assign({}, state, {
        errors: state.errors + 1
      })
    default:
      return state
  }
}

export default reducer
