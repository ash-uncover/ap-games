const StringUtils = {
  capitalize (s) {
    if (s === null || typeof s === 'undefined') {
      throw new Error('Argument cannot be null or undefined')
    }
    if (typeof s !== 'string') {
      throw new Error('Argument must be a string')
    }
    if (s.length) {
      return s.substring(0, 1).toUpperCase() + s.substring(1).toLowerCase()
    }
    return ''
  }
}

export default StringUtils
