import { combineReducers } from 'redux'

import app from 'reducers/app.reducer'
import i18n from 'reducers/i18n.reducer'
import risk from 'games/risk/reducers/RiskReducer'
import pendu from 'games/pendu/reducers/PenduReducer'

const index = combineReducers({
  app,
  i18n,
  pendu,
  risk
})

export default index
