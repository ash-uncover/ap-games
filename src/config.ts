import Logger from '@uncover/js-utils-logger'
const LOGGER = new Logger('CONFIG')

const CONFIG: {
  AP_GAMES_PLUGIN: string
  AP_GAMES_PUBLIC: string
  AP_GAMES_ENVIRONMENT: string
} = {
  AP_GAMES_PLUGIN: 'http://localhost:8080/plugin.json',
  AP_GAMES_PUBLIC: '',
  AP_GAMES_ENVIRONMENT: 'local',
}

// Load config from env
try {
  // This cannot be factorized since webpack simply replace the full process.env.[property] strings
  if (process.env.AP_GAMES_PLUGIN) {
    CONFIG.AP_GAMES_PLUGIN = process.env.AP_GAMES_PLUGIN
  }
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
  // @ts-ignore
  console.log(` - ${confKey}: '${CONFIG[confKey]}'`)
})

export default CONFIG
