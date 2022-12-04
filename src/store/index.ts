import { configureStore } from '@reduxjs/toolkit'

import AppSlice from 'store/app/app.slice'
import AudioSlice from 'store/audio/audio.slice'

export default configureStore({
  reducer: {
    app: AppSlice.reducer,
    audio: AudioSlice.reducer,
  }
})
