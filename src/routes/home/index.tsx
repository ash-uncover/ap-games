import React from 'react'
// Components
import { Navigate, Route, Routes } from 'react-router-dom'
import { Page, PageContent, PageMenu } from '@uncover/games-common'
import { HomeMenuSettings } from '../../components/home/menu/HomeMenuSettings'
import { HomeMenu } from '../../components/home/menu/HomeMenu'
import { HomeContentSettingsAudio } from '../../components/home/content/settings/HomeContentSettingsAudio'
import { HomeContentSettingsDisplay } from '../../components/home/content/settings/HomeContentSettingsDisplay'
import { HomeContentSettingsGeneral } from '../../components/home/content/settings/HomeContentSettingsGeneral'
import { HomeContentCredits } from '../../components/home/content/credits/HomeContentCredits'
import { HomeContentLibrary } from '../../components/home/content/library/HomeContentLibrary'

const RouteHome = () => {

  // Rendering //

  return (
    <Page>
      <PageMenu>
        <Routes>
          <Route path='' element={<Navigate to='/library' replace={true} />} />
          <Route path='library' element={<HomeMenu />} />
          <Route path='settings'>
            <Route path='' element={<Navigate to='/settings/general' replace={true} />} />
            <Route path='general' element={<HomeMenuSettings />} />
            <Route path='audio' element={<HomeMenuSettings />} />
            <Route path='display' element={<HomeMenuSettings />} />
          </Route>
          <Route path='credits' element={<HomeMenu />} />
          <Route path='*' element={<Navigate to='/library' replace={true} />} />
        </Routes>
      </PageMenu>
      <PageContent>
        <Routes>
          <Route path='' element={<Navigate to='/library' replace={true} />} />
          <Route path='library' element={<HomeContentLibrary />} />
          <Route path='settings'>
            <Route path='' element={<Navigate to='/settings/general' replace={true} />} />
            <Route path='general' element={<HomeContentSettingsGeneral />} />
            <Route path='audio' element={<HomeContentSettingsAudio />} />
            <Route path='display' element={<HomeContentSettingsDisplay />} />
          </Route>
          <Route path='credits' element={<HomeContentCredits />} />
          <Route path='*' element={<Navigate to='/library' replace={true} />} />
        </Routes>
      </PageContent>

    </Page>
  )
}

export default RouteHome
