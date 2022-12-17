import Logger, { LogLevels } from '@uncover/js-utils-logger'
import {
  Plugin,
  PluginDefine,
  PluginDefines,
  PluginProvide,
  PluginProvideAttributes,
  PluginProvides,
  PluginProvideViewers
} from './PluginDefintionModel'

export interface Plugins {
  [key: string]: Plugin
}

interface PluginDefinitions {
  [key: string]: PluginDefinition
}
interface PluginDefinition extends PluginDefine {

}
interface PluginProviders {
  [key: string]: PluginProvider[]
}
interface PluginProvider extends PluginProvide {
  plugin: string
}

const LOGGER = new Logger('PluginManager', LogLevels.DEBUG)

const plugins: Plugins = {}
const definitions: PluginDefinitions = {}
const providers: PluginProviders = {}

export const fetchPlugin = async (url: string) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers()
    })
    const data = await response.json()
    return data
  } catch (error) {
    throw new Error(`[fetchPlugin] Failed to fetch plugin from ${url}: ${error}`)
  }
}

export const checkPlugin = (data: Plugin) => {
  if (!data) {
    throw new Error('[checkPlugin] plugin information is not defined')
  }
  if (!data.name) {
    throw new Error('[checkPlugin] plugin name is missing')
  }
  if (!data.url) {
    throw new Error('[checkPlugin] plugin url is missing')
  }

  if (!data.dependencies) {
    data.dependencies = []
  }
  if (!data.defines) {
    data.defines = {}
  }
  if (!data.provides) {
    data.provides = {}
  }
}

export const loadPluginDefines = (data: Plugin) => {
  const defines: PluginDefines = data.defines
  Object.keys(defines).forEach((defineId: string) => {
    if (definitions[defineId]) {
      LOGGER.warn(`Define '${defineId}' from '${data.url}' already registered from '${plugins[data.name].url}'`)
    } else {
      definitions[defineId] = defines[defineId]
    }
  })
}

export const loadPluginProvides = (plugin: Plugin) => {
  const provides: PluginProvides = plugin.provides
  Object.keys(provides).forEach((provideId) => {
    if (!definitions[provideId]) {
      LOGGER.warn(`Provide '${provideId}' from '${plugin.url}' is not defined`)
    } else {
      const provide = provides[provideId]
      providers[provideId] = providers[provideId] || []
      if (Array.isArray(provide)) {
        provide.forEach((prov) => loadPluginProvide(plugin, provideId, prov))
      } else {
        loadPluginProvide(plugin, provideId, provide)
      }
    }
  })
}

export const loadPluginProvide = (plugin: Plugin, provideId: string, provide: PluginProvide) => {
  const provider: PluginProvider = {
    plugin: plugin.name,
    name: provide.name,
    attributes: loadPluginProvideAttributes(plugin, provide.attributes),
    viewers: loadPluginProvideViewers(plugin, provide.viewers),
  }
  providers[provideId].push(provider)
}

export const loadPluginProvideAttributes = (plugin: Plugin, attributes: PluginProvideAttributes) => {
  return { ...attributes }
}
export const loadPluginProvideViewers = (plugin: Plugin, viewers: PluginProvideViewers) => {
  return { ...viewers }
}


export const loadPluginDependencies = (data: Plugin) => {
  return data.dependencies.map((dependency: string) => loadPluginInternal(dependency, false))
}

export const loadPluginInternal = async (url: string, master: boolean) => {
  try {
    const data = await fetchPlugin(url)
    checkPlugin(data)
    if (plugins[data.name]) {
      LOGGER.warn(`Plugin '${data.name}' from '${data.url}' already registered from '${plugins[data.name].url}'`)
      // We dont process anything to prevent cyclic loading
      return Promise.resolve()
    }
    plugins[data.name] = data
    loadPluginDefines(data)
    loadPluginProvides(data)
    const dependencyLoaders = loadPluginDependencies(data)
    return Promise.all(dependencyLoaders)

  } catch (error) {
    LOGGER.warn(`Failed to load plugin from '${url}'`)
    LOGGER.warn(String(error))
  }
}

export class PluginManager {
  static loadPlugin(url: string) {
    return loadPluginInternal(url, true)
  }
  static get plugins() {
    return plugins
  }
  static get definitions() {
    return definitions
  }
  static get providers() {
    return providers
  }

  static getProviders(entity: string) {
    return providers[entity]
  }
}