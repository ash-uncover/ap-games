export const DOBBLE_START_GAME = 'DOBBLE_START_GAME'
export const dobbleStartGame = () => {
  return {
    type: DOBBLE_START_GAME
  }
}

export const DOBBLE_SELECT_SYMBOL = 'DOBBLE_SELECT_SYMBOL'
export const dobbleSelectSymbol = (symbolId) => {
  return {
    args: { symbolId: symbolId },
    type: DOBBLE_SELECT_SYMBOL
  }
}

export const DOBBLE_FINISH_GAME = 'DOBBLE_FINISH_GAME'
export const dobbleFinishGame = () => {
  return {
    type: DOBBLE_FINISH_GAME
  }
}
