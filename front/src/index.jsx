import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import App from 'components/App'
// Import global FLUX objects
import actions from 'actions'
import reducer from 'reducers'
// Import games
import Pendu from 'games/pendu'
import Risk from 'games/risk'

import '../assets/styles/styles.css'

const store = createStore(reducer)

class DebugRouter extends BrowserRouter {
  constructor(props){
    super(props);
    console.log('initial history is: ', JSON.stringify(this.history, null,2))
    this.history.listen((location, action)=>{
      console.log(
        `The current URL is ${location.pathname}${location.search}${location.hash}`
      )
      console.log(`The last navigation action was ${action}`, JSON.stringify(this.history, null,2));
    });
  }
}

render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('reactroot')
)
