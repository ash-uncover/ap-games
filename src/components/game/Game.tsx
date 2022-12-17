import React, { useEffect } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'
import { MessageService, Message } from '@uncover/js-utils-microfrontend'
// Libs
import CONFIG from 'config'

import './Game.css'
import { PluginManager } from 'lib/data/PluginManager'

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

  const game = PluginManager.providers['game'].find(g => g.plugin === gameId)

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
      src={`${game.url}?embedded=true`}
    />
  )
}

export default Game