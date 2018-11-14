const getRandomInt = function (max) {
  return Math.floor(Math.random() * Math.floor(max))
}

const Dice = {}

Dice.D6 = function () {
  return getRandomInt(6) + 1
}

Dice.throw = function (dices) {
  const [ nb, value ] = dices.split('D')
  const result = []
  for (let i = 0; i < Number(nb); i++) {
    result.push(getRandomInt(Number(value)) + 1)
  }
  return result
}

export default Dice
