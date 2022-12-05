import Logger from '@uncover/js-utils-logger'
const LOGGER = new Logger('CONFIG')

const CONFIG: {
  [key: string]: string
} = {
  AP_GAMES_PUBLIC: '',
  AP_GAMES_ENVIRONMENT: 'local'
}

// Load config from env
try {
  // This cannot be factorized since webpack simply replace the full process.env.[property] strings
  if (process.env.AP_GAMES_PUBLIC) {
    CONFIG.AP_GAMES_PUBLIC = process.env.AP_GAMES_PUBLIC
  }
  if (process.env.AP_GAMES_ENVIRONMENT) {
    CONFIG.AP_GAMES_ENVIRONMENT = process.env.AP_GAMES_ENVIRONMENT
  }
} catch (error) {
  LOGGER.warn('Failed to load from process.env')
}

console.log('CONFIG')

Object.keys(CONFIG).forEach((confKey: string) => {
  console.log(` - ${confKey}: '${CONFIG[confKey]}'`)
})

export default CONFIG
