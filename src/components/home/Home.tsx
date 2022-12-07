import React, { useEffect, useState } from 'react'
import { AudioTypes, ShortcutManager, Shortcuts } from '@uncover/games-common'
// Libs
import Audio, { AudioFiles } from 'lib/utils/Audio'
import { Games } from 'lib/data'
// Components
import HomeTile from './HomeTile'

import './Home.css'
import { useNavigate } from 'react-router-dom'
import HomeTiles from './HomeTiles'

const Home = () => {

  // Hooks //

  const navigate = useNavigate()

  useEffect(() => {
    return Audio.play(
      AudioFiles.home,
      AudioTypes.MUSIC
    )
  }, [])

  useEffect(() => {
    const shortcuts: Shortcuts = {
      id: 'home-shortcuts',
      priority: 1,
      shortcuts: []
    }
    return ShortcutManager.addShortcuts(shortcuts)
  }, [])

  // Events //

  const handleGameClick = (gameId: string) => {
    navigate(`/games/${gameId}`)
  }

  // Rendering //

  return (
    <div className='home'>
      <div className='home-header'>
        HOME HEADER
      </div>
      <div className='home-content'>
        <HomeTiles>
          {Object.values(Games).map(game => {
            return (
              <HomeTile
                key={game.id}
                {...game}
                onClick={() => handleGameClick(game.id)}
              />
            )
          })}
        </HomeTiles>
      </div>
    </div>
  )
}

export default Home