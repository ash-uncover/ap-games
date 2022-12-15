import React, { useEffect } from 'react'
import { AudioTypes, PageMenu, ShortcutManager, Shortcuts } from '@uncover/games-common'
// Libs
import Audio, { AudioFiles } from 'lib/utils/Audio'
// Components
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import HomeSettingsGeneral from './settings/HomeSettingsGeneral'
import HomeSettingsAudio from './settings/HomeSettingsAudio'
import HomeSettingsVideo from './settings/HomeSettingsVideo'
import HomeCredits from './credits/HomeCredits'
import HomeLibrary from './library/HomeLibrary'

import './Home.css'

const Home = () => {

  // Hooks //

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

  // Rendering //

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
            content: <HomeLibrary />
          }, {
            id: 'settings',
            icon: <FontAwesomeIcon icon={['fas', 'gear']} />,
            title: 'Settings',
            content: null,
            pages: [{
              id: 'settings-general',
              icon: <FontAwesomeIcon icon={['fas', 'wrench']} />,
              title: 'General',
              content: <HomeSettingsGeneral />,
            }, {
              id: 'settings-audio',
              icon: <FontAwesomeIcon icon={['fas', 'sliders']} />,
              title: 'Audio',
              content: <HomeSettingsAudio />,
            }, {
              id: 'settings-video',
              icon: <FontAwesomeIcon icon={['fas', 'desktop']} />,
              title: 'Video',
              content: <HomeSettingsVideo />,
            }]
          }, {
            id: 'credits',
            icon: <FontAwesomeIcon icon={['fas', 'gifts']} />,
            title: 'Credits',
            content: <HomeCredits />
          }]
        }}
      />

    </div>
  )
}

export default Home