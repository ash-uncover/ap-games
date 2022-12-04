import request from 'utils-lib/request/request'
import ActionRegistry from 'core/actions/ActionRegistry'

import { URLHelper } from 'utils-lib'

const Helper = {}

Helper.loadI18N = (dispatch) => {
  return Promise.all([
    request({
      method: 'GET',
      url: URLHelper.get('src/games/defaul/assets/i18n/default.i18n.json')
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
