import React, { useEffect, ReactElement } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// Store
import AppSelectors from 'store/app/app.selectors'
import AppSlice from 'store/app/app.slice'
// Libs
import 'lib/utils/icons'
import MessageServiceCentral from 'services/message.service'
import { useTranslation } from 'react-i18next'

interface AppProperties {
  children: ReactElement
}

const App = ({
  children
}: AppProperties) => {

  // Hooks //

  const dispatch = useDispatch()
  const loaded = useSelector(AppSelectors.loaded)

  const { t } = useTranslation()

  useEffect(() => {
    return MessageServiceCentral.init(dispatch)
  }, [])

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