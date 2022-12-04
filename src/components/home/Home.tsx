import React, { useEffect, useState } from 'react'
import { AudioTypes, ShortcutManager, Shortcuts } from '@uncover/games-common'
// Libs
import Audio, { AudioFiles } from 'lib/utils/Audio'
import { Games } from 'lib/data'
// Components
import HomeTile from './HomeTile'

import './Home.css'

const Home = () => {

  // Hooks //

  const [game, setGame] = useState(null)

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

  const handleGameClick = (gameId) => {
    setGame(gameId)
  }

  // Rendering //

  return (
    <div className='home'>
      <div className='home-header'>
        HOME HEADER
      </div>
      <div className='home-content'>
        {!game ?
          <ul>
            {Object.values(Games).map(game => {
              return (
                <HomeTile
                  key={game.id}
                  {...game}
                  onClick={() => handleGameClick(game.id)}
                />
              )
            })}
          </ul>
          : null}
        {game ?
          <iframe
            width={'100%'}
            height={'100%'}
            style={{
              border: 0
            }}
            src={Games[game].url}
          />
          : null}
      </div>
    </div>
  )
}

export default Home