import React, { MouseEvent } from 'react'
// Libs
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'

import './HomeTile.css'

interface HomeTileProperties {
  id: string
  url: string
  name: string
  description: string
  thumbnail: string

  onClick: () => void
}

const HomeTile = ({
  id,
  url,
  name,
  description,
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
          src={`${thumbnail}`}
        />
        <div
          className='tile-image-hover'
        >
          <img
            src={`images/icon-play.png`}
          />
        </div>
        <a
          href={url}
          onClick={handleTileClick}
        >
        </a>
      </div>
      <div className='tile-info'>
        <div className='tile-info-text'>
          <div className='title'>
            {name}
          </div>
          <div className='description'>
            {description}
          </div>
        </div>
        <FontAwesomeIcon
          className='tile-info-icon'
          icon={faCircleInfo}
        />
      </div>
    </li>
  )
}

export default HomeTile