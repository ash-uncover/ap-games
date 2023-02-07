import React from 'react'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate } from 'react-router-dom'
// Components
import { Menu } from '@uncover/games-common'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const HomeMenu = () => {

  // Hooks //

  const { t } = useTranslation()
  const navigate = useNavigate()
  const location = useLocation()

  // Events //

  // Rendering //

  const items = [{
    icon: <FontAwesomeIcon icon={['fas', 'gamepad']} />,
    selected: location.pathname === '/library',
    text: t('home.library.menu'),
    onClick: () => { navigate('/library') }
  }, {
    icon: <FontAwesomeIcon icon={['fas', 'gear']} />,
    selected: location.pathname === '/settings',
    text: t('home.settings.menu'),
    onClick: () => { navigate('/settings/general') }
  }, {
    icon: <FontAwesomeIcon icon={['fas', 'gifts']} />,
    selected: location.pathname === '/credits',
    text: t('home.credits.menu'),
    onClick: () => { navigate('/credits') }
  }]

  return (
    <Menu
      title={t('home.title')}
      items={items}
    />
  )
}