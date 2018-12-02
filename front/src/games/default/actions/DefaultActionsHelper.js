import request from 'utils-lib/request/request'
import ActionRegistry from 'core/actions/ActionRegistry'

const Helper = {}
const urlBase = 'http://localhost:8080/src/games/default/assets/'

Helper.loadI18N = (dispatch) => {
  return Promise.all([
    request({
      method: 'GET',
      url: `${urlBase}i18n/default.i18n.json`
    }).then((result) => dispatch(ActionRegistry.i18nLoaded(result)))
  ])
}

Helper.loadData = (dispatch) => {
  const result = {}
  dispatch(ActionRegistry.defaultLoadDataRequest())
  Promise.all([
    Helper.loadI18N(dispatch)
  ])
    .then(() => {
      dispatch(ActionRegistry.defaultLoadDataSuccess(result))
    })
    .catch((oError) => {
      dispatch(ActionRegistry.defaultLoadDataFailure(oError))
    })
}

export default Helper
