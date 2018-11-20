import MemoryData from '../model/MemoryData'
import MemoryDifficulty from '../model/MemoryDifficulty'

const MemoryHelper = {}

MemoryHelper.initGame = (difficulty) => {
  const word = MemoryData.WORDS[Math.floor((Math.random() * MemoryData.WORDS.length))]
  const secret = []
  const letters = []
  for (let i = 0; i < word.length; i++) {
    secret.push(word[i].toUpperCase())
  }
  if (difficulty === MemoryDifficulty.EASY) {
    letters.push(secret[0])
    if (secret[secret.length - 1] !== secret[0]) {
      letters.push(secret[secret.length - 1])
    }
  }
  if (difficulty === MemoryDifficulty.MEDIUM) {
    letters.push(secret[0])
  }
  return {
    difficulty,
    won: false,
    lost: false,
    startTime: new Date(),
    endTime: null,
    letters,
    secret
  }
}

MemoryHelper.addLetter = (game, letter) => {
  const l = letter.toUpperCase()
  if (game.letters.indexOf(l) === -1) {
    game.letters.push(l)
  }
  game.won = !game.secret.some((letter) => game.letters.indexOf(letter) === -1)
  game.lost = game.letters.filter((letter) => game.secret.indexOf(letter) === -1).length >= game.difficulty.maxErrors
  if (game.won || game.lost) {
    game.endTime = new Date()
  }
}

export default MemoryHelper
