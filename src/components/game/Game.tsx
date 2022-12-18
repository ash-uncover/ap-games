import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { MessageService, Message, PluginManager } from '@uncover/js-utils-microfrontend'
// Libs

import './Game.css'

interface GameProperties {
  gameId: string
}

const Game = ({
  gameId
}: GameProperties) => {

  // Hooks //

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

  const game = PluginManager.providers['ap-games/game'].find(g => g.plugin === gameId)

  if (!game) {
    return (
      <Navigate to='/' />
    )
  }

  return (
    <iframe
      allowFullScreen
      width={'100%'}
      height={'100%'}
      style={{
        border: 0
      }}
      src={`${game.elements.main.url}?embedded=true`}
    />
  )
}

export default Game