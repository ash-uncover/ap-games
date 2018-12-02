const ArrayUtils = {
  shuffle: function (array) {
    let source = [].concat(array)
    let result = []
    while (source.length) {
      let index = Math.floor(Math.random() * (source.length))
      result.push(source.splice(index, 1)[0])
    }
    return result
  },
  randomSubArray: function (array, items) {
    let source = [].concat(array)
    let result = []
    for (let i = 0; i < items; i++) {
      let index = Math.floor(Math.random() * (source.length))
      result.push(source.splice(index, 1)[0])
    }
    return result
  }
}

export default ArrayUtils
