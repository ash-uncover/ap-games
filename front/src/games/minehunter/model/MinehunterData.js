const MemoryData = {}

MemoryData.DIFFICULTIES = {
  X_SMALL: {
    id: 'X_SMALL',
    text: 'minehunter.game.difficulty.xsmall.text',
    description: 'minehunter.game.difficulty.xsmall.description',
    height: 9,
    width: 9,
    bombs: 10
  },
  SMALL: {
    id: 'SMALL',
    text: 'minehunter.game.difficulty.small.text',
    description: 'minehunter.game.difficulty.small.description',
    height: 16,
    width: 16,
    bombs: 40
  },
  HUGE: {
    id: 'HUGE',
    text: 'minehunter.game.difficulty.huge.text',
    description: 'minehunter.game.difficulty.huge.description',
    height: 16,
    width: 40,
    bombs: 99
  }
}

MemoryData.SELECT_MODES = {
  REVEAL: {
    id: 'reveal'
  },
  FLAG: {
    id: 'flag'
  },
  QUESTION: {
    id: 'question'
  }
}

export default MemoryData
