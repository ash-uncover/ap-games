import React from 'react'
import { useTranslation } from 'react-i18next'

interface HomeSettingsGeneralProperties {

}

const HomeSettingsGeneral = ({

}: HomeSettingsGeneralProperties) => {

  // Hooks //

  const { t } = useTranslation()

  // Rendering //

  return (
    <div>
      <h2 style={{ fontWeight: 'normal' }}>
        {t('home.settings.general.header')}
      </h2>
    </div>
  )
}

export default HomeSettingsGeneral