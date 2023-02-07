import AppState from 'store/app/app.state'
import { DisplayState } from './display/display.state'

export type RootState = {
  app: AppState,
  display: DisplayState,
}