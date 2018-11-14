const GAMES = {}

const checkGame = (game) => {
  if (!game.id) {
    throw new Error('game must have an id')
  }
  if (!game.reducer) {
    throw new Error('game must have a reducer')
  }
  if (!game.component) {
    throw new Error('game must have a component')
  }
}

class GameRegistry {
  register (game) {
    checkGame(game)
    if (GAMES[game.id]) {
      throw new Error(`game already defined ${game.id}`)
    }
    GAMES[game.id] = game
  }

  get (gameId) {
    return GAMES[gameId]
  }

  get GAMES () {
    return GAMES
  }
}

const Registry = new GameRegistry()
export default Registry
