import React, { MouseEvent } from 'react'
// Libs

import './HomeTile.css'

interface HomeTileProperties {
  id: string
  url: string
  name: string
  description: string
  icon: string
  thumbnail: string

  onClick: () => void
}

const HomeTile = ({
  id,
  url,
  name,
  description,
  icon,
  thumbnail,

  onClick
}: HomeTileProperties) => {

  // Events //

  const handleTileClick = (event: MouseEvent) => {
    event.preventDefault()
    onClick()
    return false
  }

  // Rendering //

  return (
    <li className='home-tile'>
      <a
        href={url}
        onClick={handleTileClick}
      >
        {name}
      </a>
    </li>
  )
}

export default HomeTile