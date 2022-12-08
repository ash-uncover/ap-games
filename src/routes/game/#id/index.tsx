import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
// Libs
import { Plugins } from 'lib/data'
import Game from 'components/game/Game'

export const RouteGame = () => {

  // Hooks //

  const params = useParams()
  const gameId = params.gameId

  // Rendering //

  if (gameId) {
    const game = Plugins[gameId]

    if (game) {
      return <Game gameId={gameId} />
    }
  }

  return (
    <Navigate to='/' />
  )
}

export default RouteGame
