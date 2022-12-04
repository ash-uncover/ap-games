import React from 'react'

import {
  Route,
  Routes,
} from 'react-router-dom'

import RouteRoot from 'routes/index'

import Audio from 'components/utils/Audio'

const Root = () => {

  // Rendering //

  return (
    <>
      <Routes>
        <Route path='/' element={<RouteRoot />}>
        </Route>
      </Routes>
      <Audio />
    </>
  )
}

export default Root
