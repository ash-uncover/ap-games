import React, { useEffect, useState } from 'react'
import { AudioTypes, ShortcutManager, Shortcuts } from '@uncover/games-common'
// Libs
import Audio, { AudioFiles } from 'lib/utils/Audio'
import { Plugins } from 'lib/data'
// Components
import HomeTile from './HomeTile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import './Home.css'
import { useNavigate } from 'react-router-dom'
import HomeTiles from './HomeTiles'
import PageMenu from 'components/commons/pagemenu/PageMenu'

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

  const renderHome = () => {
    return (
      <div className='home-content'>
        <HomeTiles>
          {Object.values(Plugins).map(game => {
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
    )
  }

  return (
    <div className='home'>
      <div className='home-header'>
        HOME HEADER
      </div>
      <PageMenu
        page={{
          id: 'home',
          title: 'Home',
          content: null,
          pages: [{
            id: 'library',
            icon: <FontAwesomeIcon icon={['fas', 'gamepad']} />,
            title: 'Library',
            content: renderHome()
          }, {
            id: 'settings',
            icon: <FontAwesomeIcon icon={['fas', 'gear']} />,
            title: 'Settings',
            content: null,
            pages: [{
              id: 'settings-general',
              icon: <FontAwesomeIcon icon={['fas', 'wrench']} />,
              title: 'General',
              content: <div>General</div>,
            }, {
              id: 'settings-audio',
              icon: <FontAwesomeIcon icon={['fas', 'sliders']} />,
              title: 'Audio',
              content: <div>Audio</div>,
            }, {
              id: 'settings-video',
              icon: <FontAwesomeIcon icon={['fas', 'desktop']} />,
              title: 'Video',
              content: <div>Video</div>,
            }]
          }, {
            id: 'credits',
            icon: <FontAwesomeIcon icon={['fas', 'gifts']} />,
            title: 'Credits',
            content: <div>Credits</div>
          }]
        }}
      />

    </div>
  )
}

export default Home