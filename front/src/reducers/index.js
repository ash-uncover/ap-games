import { combineReducers } from 'redux'

import i18n from 'reducers/i18n.reducer'
import risk from 'games/risk/reducers/RiskReducer'
import pendu from 'games/pendu/reducers/PenduReducer'

const index = combineReducers({
  i18n,
  pendu,
  risk
})

export default index
