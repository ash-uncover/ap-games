import { combineReducers } from 'redux'

import i18n from 'reducers/i18n.reducer'
import risk from 'games/risk/reducers/RiskReducer'

const index = combineReducers({
  i18n,
  risk
})

export default index
