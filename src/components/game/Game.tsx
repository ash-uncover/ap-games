import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Message, MessageService } from '@uncover/games-common'
// Libs
import { Games } from 'lib/data'

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
      src={`${Games[gameId].url}${CONFIG.AP_GAMES_ENVIRONMENT === 'local' ? '' : '#'}?embedded=true`}
    />
  )
}

export default Game