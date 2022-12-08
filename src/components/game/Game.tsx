import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { MessageService,Message } from '@uncover/js-utils-microfrontend'
// Libs
import { Plugins } from 'lib/data'

import './Game.css'
import CONFIG from 'config'

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

  return (
    <iframe
      allowFullScreen
      width={'100%'}
      height={'100%'}
      style={{
        border: 0
      }}
      src={`${Plugins[gameId].url}${CONFIG.AP_GAMES_ENVIRONMENT === 'github' ? '#' : ''}?embedded=true`}
    />
  )
}

export default Game