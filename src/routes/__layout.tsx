import React from 'react'

import {
  Route,
  Routes,
} from 'react-router-dom'

import RouteRoot from 'routes/index'
import RouteGames from 'routes/game'
import RouteGame from 'routes/game/#id'

import Audio from 'components/utils/Audio'
import Home from 'components/home/Home'

const Root = () => {

  // Rendering //

  return (
    <>
      <Routes>
        <Route path='/' element={<RouteRoot />}>
          <Route path='' element={<Home />} />
          <Route path='/games' element={<RouteGames />}>
            <Route path=':gameId' element={<RouteGame />} />
          </Route>
        </Route>
      </Routes>
      <Audio />
    </>
  )
}

export default Root
