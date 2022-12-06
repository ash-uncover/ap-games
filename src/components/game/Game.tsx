import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { Message, MessageService } from '@uncover/games-common'
// Libs
import { Games } from 'lib/data'

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

  return (
    <iframe
      allowFullScreen
      width={'100%'}
      height={'100%'}
      style={{
        border: 0
      }}
      src={`${Games[gameId].url}?embedded=true`}
    />
  )
}

export default Game