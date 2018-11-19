import request from 'utils-lib/request/request'
import ActionRegistry from 'core/actions/ActionRegistry'

const Helper = {}
const urlBase = 'http://localhost:8080/assets/'

Helper.loadI18N = (dispatch) => {
  return Promise.all([
    request({
      method: 'GET',
      url: `${urlBase}i18n/app.i18n.json`
    }).then((result) => dispatch(ActionRegistry.i18nLoaded(result)))
  ])
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
