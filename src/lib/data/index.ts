import { DataManager } from '@uncover/games-common'

import CONFIG from 'config'

import { Plugin, PluginsData } from './plugin.helper'

export const Plugins: { [key: string]: Plugin } = {}

const Data = new DataManager(`${CONFIG.AP_GAMES_PUBLIC}/data/`)

export const loadPluginsData = async () => {
  const plugins = await Data.load<PluginsData>(`plugins_${CONFIG.AP_GAMES_ENVIRONMENT}.json`)
  return Promise.all(plugins.plugins.map(async (plugin: string) => {
    const dataAccess = new DataManager('')
    const pluginData = await dataAccess.load<Plugin>(plugin, { mode: 'cors' })
    Plugins[pluginData.id] = {
      ...pluginData
    }
  }))
}

export const loadData = async () => {
  return Promise.all([
    loadPluginsData(),
  ])
}
