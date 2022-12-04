const I18NHelper = {
  _LANG_: 'FR',
  _KEYS_: {}
}

I18NHelper.reset = function () {
  I18NHelper._KEYS_ = {}
}

I18NHelper.setLang = function (lang) {
  if (I18NHelper._LANG_ !== lang) {
    I18NHelper._LANG_ = lang
    I18NHelper._KEYS_ = {}
  }
}

I18NHelper.loadData = function (data) {
  Object.keys(data).forEach((key) => {
    I18NHelper._KEYS_[key] = data[key]
  })
}

I18NHelper.getData = function () {
  return I18NHelper._KEYS_
}

I18NHelper.get = function (key) {
  return I18NHelper._KEYS_[key] || key
}

export default I18NHelper
