import React, { ReactNode } from 'react'
// Libs

import './HomeTiles.css'

interface HomeTilesProperties {
  children: ReactNode
}

const HomeTiles = ({
  children
}: HomeTilesProperties) => {

  return (
    <ul className='home-tiles'>
      {children}
    </ul>
  )
}

export default HomeTiles