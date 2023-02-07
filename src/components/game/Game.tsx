import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import {
  WardElement,
  useWardProvider,
  useWardService
} from '@uncover/ward-react'
import {
  Message
} from '@uncover/ward'

import './Game.css'

interface GameProperties {
  gameId: string
}

const Game = ({
  gameId
}: GameProperties) => {

  // Hooks //

  const navigate = useNavigate()

  const game = useWardProvider(`ap-games/game/${gameId}`)
  useWardService((message) => handleMessage(message))

  // Events //

  const handleMessage = (message: Message) => {
    if (message.type === 'exitGame') {
      navigate('/')
    }
  }

  // Rendering //

  if (!game) {
    return (
      <Navigate to='/' />
    )
  }

  const element = {
    ...game.elements.main,
    url: `${game.elements.main.url}?embedded=true`
  }

  return (
    <WardElement
      key={gameId}
      element={element}
    />
  )
}

export default Game