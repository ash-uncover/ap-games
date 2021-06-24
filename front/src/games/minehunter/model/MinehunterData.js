const MinehunterData = {}

MinehunterData.MIN_WIDTH = 9
MinehunterData.MAX_WIDTH = 30
MinehunterData.MIN_HEIGHT = 9
MinehunterData.MAX_HEIGHT = 24
MinehunterData.MIN_BOMBS = 10

MinehunterData.DIFFICULTIES = {
  SMALL: {
    id: 'SMALL',
    text: 'minehunter.game.difficulty.small.text',
    description: 'minehunter.game.difficulty.small.description',
    height: 9,
    width: 9,
    bombs: 10
  },
  NORMAL: {
    id: 'NORMAL',
    text: 'minehunter.game.difficulty.normal.text',
    description: 'minehunter.game.difficulty.normal.description',
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
  },
  CUSTOM: {
    id: 'CUSTOM',
    text: 'minehunter.game.difficulty.custom.text',
    description: 'minehunter.game.difficulty.custom.description'
  }
}

MinehunterData.SELECT_MODES = {
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

export default MinehunterData
