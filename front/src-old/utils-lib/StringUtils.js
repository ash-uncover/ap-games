const StringUtils = {}

/**
 * @param {string} string
 */
StringUtils.capitalize = function (string) {
  if (string === null || typeof string === 'undefined') {
    throw new Error('Argument cannot be null or undefined')
  }
  if (typeof string !== 'string') {
    throw new Error('Argument must be a string')
  }
  if (string.length) {
    return string.substring(0, 1).toUpperCase() + string.substring(1).toLowerCase()
  }
  return ''
}

export default StringUtils
