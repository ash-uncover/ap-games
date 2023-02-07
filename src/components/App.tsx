import React, { useEffect, ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Store
import AppSelectors from 'store/app/app.selectors'
import AppSlice from 'store/app/app.slice'
// Libs
import 'lib/utils/icons'
import { useTranslation } from 'react-i18next'
import i18n from 'lib/utils/i18n'
import { useWardService } from '@uncover/ward-react'

interface AppProperties {
  children: ReactElement
}

const App = ({
  children
}: AppProperties) => {

  // Hooks //

  const dispatch = useDispatch()
  const loaded = useSelector(AppSelectors.loaded)

  const language = useSelector(AppSelectors.language)

  const { t } = useTranslation()

  useWardService(dispatch)

  useEffect(() => {
    i18n.changeLanguage(language)
  }, [language])

  useEffect(() => {
    dispatch(AppSlice.actions.setLoaded(true))
  }, [])

  // Rendering //

  if (loaded) {
    return children
  }

  return (
    <div>
      {t('LOADING')}
    </div>
  )
}

export default App