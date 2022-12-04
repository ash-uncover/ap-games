import React from 'react'
import { Outlet } from 'react-router-dom'

import App from 'components/App'
import Home from 'components/home/Home'

const RouteRoot = () => {

  // Rendering //

  return (
    <App>
      <Home />
    </App>
  )
}

export default RouteRoot
