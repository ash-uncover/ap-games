import PenduData from '../model/PenduData'
import PenduDifficulty from '../model/PenduDifficulty'

const PenduHelper = {}

PenduHelper.initGame = (difficulty) => {
  const word = PenduData.WORDS[Math.floor((Math.random() * PenduData.WORDS.length))]
  const secret = []
  const letters = []
  for (let i = 0; i < word.length; i++) {
    secret.push(word[i].toUpperCase())
  }
  if (difficulty === PenduDifficulty.EASY) {
    letters.push(secret[0])
    if (secret[secret.length - 1] !== secret[0]) {
      letters.push(secret[secret.length - 1])
    }
  }
  if (difficulty === PenduDifficulty.MEDIUM) {
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

PenduHelper.addLetter = (game, letter) => {
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

export default PenduHelper
