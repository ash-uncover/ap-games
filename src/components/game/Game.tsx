import React, { useEffect, useState } from 'react'
// Libs
import { Games } from 'lib/data'

import './Game.css'

interface GameProperties {
  gameId: string
}

const Game = ({
  gameId
}: GameProperties) => {

  // Rendering //

  return (
    <iframe
      allowFullScreen
      width={'100%'}
      height={'100%'}
      style={{
        border: 0
      }}
      src={Games[gameId].url}
    />
  )
}

export default Game