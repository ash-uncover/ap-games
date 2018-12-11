import request from 'utils-lib/request/request'
import ActionRegistry from 'core/actions/ActionRegistry'

const Helper = {}
const urlBase = 'http://localhost:8080/src/games/mozaic/assets/'

Helper.loadI18N = (dispatch) => {
  return Promise.all([
    request({
      method: 'GET',
      url: `${urlBase}i18n/mozaic.i18n.json`
    }).then((result) => dispatch(ActionRegistry.i18nLoaded(result)))
  ])
}

Helper.loadData = (dispatch) => {
  const result = {}
  dispatch(ActionRegistry.mozaicLoadDataRequest())
  Promise.all([
    Helper.loadI18N(dispatch)
  ])
    .then(() => {
      dispatch(ActionRegistry.mozaicLoadDataSuccess(result))
    })
    .catch((oError) => {
      dispatch(ActionRegistry.mozaicLoadDataFailure(oError))
    })
}

export default Helper
