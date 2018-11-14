const RiskHelper = {}

RiskHelper.computeBattle = function (attDices, defDices) {
  const result = {
    att: 0,
    def: 0
  }
  const sortedAttDices = attDices.sort((a,b) => b - a)
  const sortedDefDices = defDices.sort((a,b) => b - a)
  for (let i = 0; i < sortedAttDices.length && i < sortedDefDices.length; i++) {
    if (sortedAttDices[i] > sortedDefDices[i]) {
      result.def++
    } else {
      result.att++
    }
  }
  return result
}

export default RiskHelper
