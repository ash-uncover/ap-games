const ArrayUtils = {}

/**
 * @param {number} size an integer
 */
ArrayUtils.createIntArray = function (size) {
  const result = []
  for (let i = 0; i < size; i++) {
    result.push(i)
  }
  return result
}

/**
 * @param {array} array
 */
ArrayUtils.shuffle = function (array) {
  const source = [].concat(array)
  const result = []
  while (source.length) {
    const index = Math.floor(Math.random() * (source.length))
    result.push(source.splice(index, 1)[0])
  }
  return result
}

/**
 * @param {array} array
 * @param {number} items
 */
ArrayUtils.randomSubArray = function (array, items) {
  const source = [].concat(array)
  const result = []
  for (let i = 0; i < items; i++) {
    const index = Math.floor(Math.random() * (source.length))
    result.push(source.splice(index, 1)[0])
  }
  return result
}

export default ArrayUtils
