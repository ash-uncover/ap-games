import { configureStore } from '@reduxjs/toolkit'

import AppSlice from 'store/app/app.slice'
import AudioSlice from 'store/audio/audio.slice'
import DisplaySlice from 'store/display/display.slice'

export default configureStore({
  reducer: {
    app: AppSlice.reducer,
    audio: AudioSlice.reducer,
    display: DisplaySlice.reducer,
  }
})
