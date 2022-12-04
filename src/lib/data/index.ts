import { DataManager } from '@uncover/games-common'

import CONFIG from 'config'

import { Game, GamesData } from './game.helper'

export const Games: { [key: string]: Game } = {}

const Data = new DataManager(`${CONFIG.AP_GAMES_PUBLIC}/data/`)

export const loadGamesData = async () => {
  const games = await Data.load<GamesData>('games.json')
  return Promise.all(games.games.map(async (game: string) => {
    const dataAccess = new DataManager(game)
    const gameData = await dataAccess.load<Game>('game-info.json')
    Games[gameData.id] = {
      ...gameData,
      url: game
    }
  }))
}

export const loadData = async () => {
  return Promise.all([
    loadGamesData(),
  ])
}
