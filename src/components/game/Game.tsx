import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { WardElement, useProvider } from '@uncover/ward-react'
import { MessageService, Message } from '@uncover/ward'

import './Game.css'

interface GameProperties {
  gameId: string
}

const Game = ({
  gameId
}: GameProperties) => {

  // Hooks //

  const game = useProvider(`ap-games/game/${gameId}`)

  const navigate = useNavigate()

  useEffect(() => {
    const Service = new MessageService()
    return Service.init((message: Message) => {
      if (message.type === 'exitGame') {
        navigate('/')
      }
    })
  }, [])

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