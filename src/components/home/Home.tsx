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
import { useTranslation } from 'react-i18next'

const Home = () => {

  // Hooks //

  const { t } = useTranslation()

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
        {t('home.header')}
      </div>
      <PageMenu
        page={{
          id: 'home',
          title: t('home.title'),
          content: null,
          pages: [{
            id: 'library',
            icon: <FontAwesomeIcon icon={['fas', 'gamepad']} />,
            title: t('home.library.title'),
            content: <HomeLibrary />
          }, {
            id: 'settings',
            icon: <FontAwesomeIcon icon={['fas', 'gear']} />,
            title: t('home.settings.title'),
            content: null,
            pages: [{
              id: 'settings-general',
              icon: <FontAwesomeIcon icon={['fas', 'wrench']} />,
              title: t('home.settings.general.title'),
              content: <HomeSettingsGeneral />,
            }, {
              id: 'settings-audio',
              icon: <FontAwesomeIcon icon={['fas', 'sliders']} />,
              title: t('home.settings.audio.title'),
              content: <HomeSettingsAudio />,
            }, {
              id: 'settings-video',
              icon: <FontAwesomeIcon icon={['fas', 'desktop']} />,
              title: t('home.settings.video.title'),
              content: <HomeSettingsVideo />,
            }]
          }, {
            id: 'credits',
            icon: <FontAwesomeIcon icon={['fas', 'gifts']} />,
            title: t('home.credits.title'),
            content: <HomeCredits />
          }]
        }}
      />

    </div>
  )
}

export default Home