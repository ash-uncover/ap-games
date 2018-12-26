import request from 'utils-lib/request/request'
import ActionRegistry from 'core/actions/ActionRegistry'

import { URLHelper } from 'utils-lib'

const Helper = {}

Helper.loadI18N = (dispatch) => {
  return Promise.all([
    request({
      method: 'GET',
      url: URLHelper.getUrl('assets/i18n/app.i18n.json')
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
