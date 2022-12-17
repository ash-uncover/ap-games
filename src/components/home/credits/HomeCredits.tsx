import React from 'react'
import { useTranslation } from 'react-i18next'

interface HomeCreditsProperties {

}

const HomeCredits = ({

}: HomeCreditsProperties) => {

  // Rendering //

  const { t } = useTranslation()

  return (
    <div>
      {t('home.credits.content')}
    </div>
  )
}

export default HomeCredits