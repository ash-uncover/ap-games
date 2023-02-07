import { configureStore } from '@reduxjs/toolkit'

import AppSlice from 'store/app/app.slice'
import DisplaySlice from 'store/display/display.slice'

export default configureStore({
  reducer: {
    app: AppSlice.reducer,
    display: DisplaySlice.reducer,
  }
})
