import ActionRegistry from 'core/actions/ActionRegistry'

const Helper = {
  loadI18N: () => {}
}

Helper.loadData = (dispatch) => {
  const result = {}
  dispatch(ActionRegistry.appLoadDataRequest())
  Promise.all([
    Helper.loadI18N(dispatch)
  ])
    .then(() => {
      dispatch(ActionRegistry.appLoadDataSuccess(result))
    })
    .catch((oError) => {
      dispatch(ActionRegistry.appLoadDataFailure(oError))
    })
}

export default Helper
