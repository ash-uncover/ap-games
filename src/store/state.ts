import AppState from 'store/app/app.state'
import { AudioState } from './audio/audio.state'

export type RootState = {
  app: AppState,
  audio: AudioState,
}