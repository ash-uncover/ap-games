import request from 'request'
import ActionRegistry from 'core/actions/ActionRegistry'

import { URLHelper } from 'utils-lib'

const _request = (args) => {
  return new Promise((resolve, reject) => {
    request(args, (error, response, body) => {
      if (!error && response.statusCode >= 200 && response.statusCode < 300) {
        try {
          resolve(JSON.parse(body))
        } catch (err) {
          resolve(body)
        }
      } else {
        if (error) {
          reject(error)
        } else {
          try {
            reject(JSON.parse(body))
          } catch (err) {
            reject(body)
          }
        }
      }
    })
  })
}

const Helper = {}

Helper.loadI18N = (result) => {
  return Promise.all([
    _request({
      method: 'GET',
      url: URLHelper.getUrl('src/games/risk/assets/i18n/risk.i18n.json')
    }).then(ActionRegistry.i18nLoaded),
    _request({
      method: 'GET',
      url: URLHelper.getUrl('src/games/risk/assets/i18n/risk.territories.i18n.json')
    }).then(ActionRegistry.i18nLoaded)
  ])
}

Helper.loadDataTerritories = (result) => {
  return _request({
    method: 'GET',
    url: URLHelper.getUrl('src/games/risk/assets/data/territories.json')
  })
    .then((oResult) => {
      result.territories = oResult
    })
}

Helper.loadDataTerritoriesLinks = (result) => {
  return _request({
    method: 'GET',
    url: URLHelper.getUrl('src/games/risk/assets/data/territories-links.json')
  })
    .then((oResult) => {
      result.territoriesLinks = oResult
    })
}

Helper.loadDataContinents = (result) => {
  return _request({
    method: 'GET',
    url: URLHelper.getUrl('src/games/risk/assets/data/continents.json')
  })
    .then((oResult) => {
      result.continents = oResult
    })
}

Helper.loadData = (dispatch) => {
  const result = {}
  dispatch(ActionRegistry.riskLoadDataRequest())
  Promise.all([
    Helper.loadDataTerritories(result),
    Helper.loadDataTerritoriesLinks(result),
    Helper.loadDataContinents(result),
    Helper.loadI18N(result)
  ])
    .then(() => {
      dispatch(ActionRegistry.riskLoadDataSuccess(result))
    })
    .catch((oError) => {
      dispatch(ActionRegistry.riskLoadDataFailure(oError))
    })
}

export default Helper
