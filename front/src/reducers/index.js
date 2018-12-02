import GameRegistry from 'core/games/GameRegistry'

import { combineReducers } from 'redux'

import app from 'reducers/app.reducer'
import i18n from 'reducers/i18n.reducer'

const reducers = Object.keys(GameRegistry.GAMES).reduce((acc, gameId) => {
  acc[gameId] = GameRegistry.GAMES[gameId].reducer
  return acc
}, {})
console.log(reducers)
reducers.app = app
reducers.i18n = i18n

const index = combineReducers(reducers)
export default index
