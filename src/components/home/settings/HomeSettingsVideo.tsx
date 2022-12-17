import React from 'react'
import { useTranslation } from 'react-i18next'

interface HomeSettingsVideoProperties {

}

const HomeSettingsVideo = ({

}: HomeSettingsVideoProperties) => {

  // Hooks //
  const { t } = useTranslation()

  // Rendering //

  return (
    <div>
      {t('home.settings.video.header')}
    </div>
  )
}

export default HomeSettingsVideo