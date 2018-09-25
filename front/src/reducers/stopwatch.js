
const defaultState = {
  startTime: null,
  startStamp: null,
  pauseStamp: null,
  stopTime: null,
  stopStamp: null,
  lastDuration: null,
  state: 'STOPPED'
}

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case 'STOPWATCH_START':
      let start = new Date().getTime()
      return {
        startTime: start,
        startStamp: start,
        state: 'STARTED'
      }
    case 'STOPWATCH_PAUSE':
      return Object.assign({}, state, {
        pauseStamp: new Date().getTime(),
        state: 'PAUSED'
      })
    case 'STOPWATCH_RESUME':
      return Object.assign({}, state, {
        startStamp: state.startStamp + (new Date().getTime() - state.pauseStamp),
        pauseStamp: null,
        state: 'STARTED'
      })
    case 'STOPWATCH_STOP':
      let stop = new Date().getTime()
      return Object.assign({}, state, {
        stopTime: stop,
        stopStamp: stop,
        lastDuration: stop - state.startStamp,
        state: 'STOPPED'
      })
    default:
      return state
  }
}

export default reducer
