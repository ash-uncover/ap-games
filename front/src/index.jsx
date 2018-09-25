import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from 'components/App'

import reducer from 'reducers'

import SudokuActions from 'flux/SudokuActions'
import SudokuStore from 'flux/SudokuStore'

import AppRouter from 'components/AppRouter.jsx'

import '../assets/styles/styles.css'

const store = createStore(reducer)

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('reactroot')
)
