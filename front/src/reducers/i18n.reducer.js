const defaultState = {
  lang: null,
  loaded: false,
  loading: false,
  loadingError: null,
  data: {}
}

const reducer = (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state))
  switch (action.type) {
    case 'I18N_LOADED':
      newState.data = Object.assign(newState.data, action.args.data)
      break
    default:
  }
  return newState
}

export default reducer
