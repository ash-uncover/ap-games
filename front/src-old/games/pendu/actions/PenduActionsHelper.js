import request from 'utils-lib/request/request'
import ActionRegistry from 'core/actions/ActionRegistry'

import { URLHelper } from 'utils-lib'

const Helper = {}

Helper.loadI18N = (dispatch) => {
  return Promise.all([
    request({
      method: 'GET',
      url: URLHelper.getUrl('src/games/pendu/assets/i18n/pendu.i18n.json')
    }).then((result) => dispatch(ActionRegistry.i18nLoaded(result)))
  ])
}

Helper.loadData = (dispatch) => {
  const result = {}
  dispatch(ActionRegistry.penduLoadDataRequest())
  Promise.all([
    Helper.loadI18N(dispatch)
  ])
    .then(() => {
      dispatch(ActionRegistry.penduLoadDataSuccess(result))
    })
    .catch((oError) => {
      dispatch(ActionRegistry.penduLoadDataFailure(oError))
    })
}

export default Helper
