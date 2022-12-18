import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
// Libs
import Game from 'components/game/Game'
import { PluginManager } from '@uncover/js-utils-microfrontend'

export const RouteGame = () => {

  // Hooks //

  const params = useParams()
  const gameId = params.gameId

  // Rendering //

  if (gameId) {
    const game = PluginManager.providers['ap-games/game'].find(g => g.plugin === gameId)

    if (game) {
      return <Game gameId={gameId} />
    }
  }

  return (
    <Navigate to='/' />
  )
}

export default RouteGame
