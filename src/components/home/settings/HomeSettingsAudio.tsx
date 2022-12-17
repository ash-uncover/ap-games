import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useDispatchMessage } from 'services/message.service'
// Hooks
import AudioSlice from 'store/audio/audio.slice'
import AudioSelectors from 'store/audio/audio.selectors'
// Components
import { MenuCheckbox, MenuStepInput } from '@uncover/games-common'
import { useTranslation } from 'react-i18next'

interface HomeSettingsAudioProperties {

}

const HomeSettingsAudio = ({

}: HomeSettingsAudioProperties) => {

  // Hooks //

  const { t } = useTranslation()

  const dispatch = useDispatch()
  const dispatchMessage = useDispatchMessage(dispatch)

  const soundMaster = useSelector(AudioSelectors.master)
  const soundMasterVolume = useSelector(AudioSelectors.masterVolume)
  const soundGame = useSelector(AudioSelectors.game)
  const soundGameVolume = useSelector(AudioSelectors.gameVolume)
  const soundMusic = useSelector(AudioSelectors.music)
  const soundMusicVolume = useSelector(AudioSelectors.musicVolume)
  const soundInterface = useSelector(AudioSelectors.interfac)
  const soundInterfaceVolume = useSelector(AudioSelectors.interfaceVolume)

  // Events //

  const handleMasterChange = (value: boolean) => {
    dispatchMessage(AudioSlice.actions.setMaster(value))
  }
  const handleMasterVolumeChange = (value: number) => {
    dispatchMessage(AudioSlice.actions.setMasterVolume(value))
  }

  const handleGameChange = (value: boolean) => {
    dispatchMessage(AudioSlice.actions.setGame(value))
  }
  const handleGameVolumeChange = (value: number) => {
    dispatchMessage(AudioSlice.actions.setGameVolume(value))
  }

  const handleInterfaceChange = (value: boolean) => {
    dispatchMessage(AudioSlice.actions.setInterface(value))
  }
  const handleInterfaceVolumeChange = (value: number) => {
    dispatchMessage(AudioSlice.actions.setInterfaceVolume(value))
  }

  const handleMusicChange = (value: boolean) => {
    dispatchMessage(AudioSlice.actions.setMusic(value))
  }
  const handleMusicVolumeChange = (value: number) => {
    dispatchMessage(AudioSlice.actions.setMusicVolume(value))
  }

  // Rendering //

  return (
    <div>
      <h2 style={{ fontWeight: 'normal' }}>
        {t('home.settings.audio.header')}
      </h2>

      <h3 style={{ fontWeight: 'normal' }}>
        {t('home.settings.audio.master.title')}
      </h3>

      <MenuCheckbox
        label={t('home.settings.audio.master.enable')}
        checked={soundMaster}
        onChange={handleMasterChange}
      />
      <MenuStepInput
        label={t('home.settings.audio.master.title')}
        min={0}
        max={100}
        value={soundMasterVolume}
        onChange={handleMasterVolumeChange}
      />

      <h3 style={{ fontWeight: 'normal' }}>
        {t('home.settings.audio.game.title')}
      </h3>

      <MenuCheckbox
        label={t('home.settings.audio.game.enable')}
        checked={soundGame}
        onChange={handleGameChange}
      />
      <MenuStepInput
        label={t('home.settings.audio.game.title')}
        min={0}
        max={100}
        value={soundGameVolume}
        onChange={handleGameVolumeChange}
      />


      <h3 style={{ fontWeight: 'normal' }}>
        {t('home.settings.audio.interface.title')}
      </h3>

      <MenuCheckbox
        label={t('home.settings.audio.interface.enable')}
        checked={soundInterface}
        onChange={handleInterfaceChange}
      />
      <MenuStepInput
        label={t('home.settings.audio.interface.title')}
        min={0}
        max={100}
        value={soundInterfaceVolume}
        onChange={handleInterfaceVolumeChange}
      />

      <h3 style={{ fontWeight: 'normal' }}>
        {t('home.settings.audio.music.title')}
      </h3>

      <MenuCheckbox
        label={t('home.settings.audio.music.enable')}
        checked={soundMusic}
        onChange={handleMusicChange}
      />
      <MenuStepInput
        label={t('home.settings.audio.music.title')}
        min={0}
        max={100}
        value={soundMusicVolume}
        onChange={handleMusicVolumeChange}
      />
    </div>
  )
}

export default HomeSettingsAudio