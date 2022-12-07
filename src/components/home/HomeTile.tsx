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
      <div className='tile-image'>
        <img
          className='tile-image-background'
          src={`${url}${thumbnail}`}
        />
        <div
          className='tile-image-hover'
        >
          <img
            src={`/images/icon-play.png`}
          />
        </div>
        <a
          href={url}
          onClick={handleTileClick}
        >
        </a>
      </div>
      <div style={{ padding: '0 0.1rem' }}>
        <div style={{ fontSize: '1rem', fontWeight: 'bold', margin: '0.2rem 0' }}>{name}</div>
        <div>{description}</div>
      </div>
    </li>
  )
}

export default HomeTile