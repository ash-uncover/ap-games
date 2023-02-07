import React from 'react'
import { createRoot } from 'react-dom/client'

import {
  Provider
} from 'react-redux'

import {
  BrowserRouter,
  HashRouter,
} from 'react-router-dom'

// Import translation module
import 'lib/utils/i18n'

// Should be imported before first access to the reducers
import store from 'store'

// Import components
import Root from 'routes/__layout'
import CONFIG from 'config'
import { ShortcutManager } from '@uncover/games-common'
import { WardDevTools, WardProvider } from '@uncover/ward-react'

ShortcutManager.reset()

let Router = BrowserRouter
if (CONFIG.AP_GAMES_ENVIRONMENT === 'github') {
  Router = HashRouter
}

const containerRoot = document.getElementById('reactroot')!
const root = createRoot(containerRoot)

root.render(
  <WardProvider plugin={CONFIG.AP_GAMES_PLUGIN}>
    <Provider store={store}>
      <Router>
        <Root />
      </Router>
    </Provider>
    {CONFIG.AP_GAMES_ENVIRONMENT === 'local' ?
      <WardDevTools />
      : null}
  </WardProvider>
)


