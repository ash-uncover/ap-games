import React from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { useWardProvider } from '@uncover/ward-react'
import Game from 'components/game/Game'

export const RouteGame = () => {

  // Hooks //

  const params = useParams()
  const gameId = params.gameId
  const game = useWardProvider(`ap-games/game/${gameId}`)

  // Rendering //

  if (gameId) {

    if (game) {
      return <Game gameId={gameId} />
    }
  }

  return (
    <Navigate to='/' />
  )
}

export default RouteGame
