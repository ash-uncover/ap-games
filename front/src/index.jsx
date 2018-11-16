import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from 'components/App'

import actions from 'actions'
import reducer from 'reducers'

import '../assets/styles/styles.css'

import Pendu from 'games/pendu'
import Risk from 'games/risk'

const store = createStore(reducer)

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('reactroot')
)
