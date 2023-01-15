import AppState from 'store/app/app.state'
import { AudioState } from './audio/audio.state'
import { DisplayState } from './display/display.state'

export type RootState = {
  app: AppState,
  audio: AudioState,
  display: DisplayState,
}