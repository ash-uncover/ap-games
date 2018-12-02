import MemoryData from './MemoryData'
import MemoryDifficulty from './MemoryDifficulty'

const MemoryHelper = {}

MemoryHelper.getRevealedCards = function (board) {
  return board.reduce((acc, card) => {
    if (card.revealed) {
      acc.push(card)
    }
    return acc
  }, [])
}

MemoryHelper.getFoundCards = function (board) {
  return board.reduce((acc, card) => {
    if (card.found) {
      acc.push(card)
    }
    return acc
  }, [])
}

export default MemoryHelper
