import { combineReducers } from 'redux'

import dobble from 'reducers/dobble'
import stopwatch from 'reducers/stopwatch'

const index = combineReducers({
  dobble,
  stopwatch
})

export default index
