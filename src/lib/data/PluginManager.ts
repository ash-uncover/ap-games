import Logger, { LogLevels } from "@uncover/js-utils-logger"

export interface Plugins {
  [key: string]: Plugin
}

export interface Plugin {
  name: string
  url: string
  dependencies: string[]

  defines?: PluginDefines
  provides?: PluginProvides
}

interface PluginDefines {
  [key: string]: PluginDefine
}
interface PluginDefine {
  properties: PluginDefineProperties
}
interface PluginDefineProperties {
  [key: string]: string
}

interface PluginProvides {
  [key: string]: PluginProvide
}
interface PluginProvide {
  url: string
  type: string
  properties: PluginProvideProperties
}
interface PluginProvideProperties {
  [key: string]: string
}

interface PluginProviders {
  [key: string]: PluginProvider[]
}
interface PluginProvider extends PluginProvide {
  plugin: string
}

const LOGGER = new Logger('PluginManager', LogLevels.DEBUG)

const plugins: Plugins = {}
const defines: PluginDefines = {}
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
  const dataDefines = data.defines || {}
  Object.keys(dataDefines).forEach((define: string) => {
    if (defines[define]) {
      LOGGER.warn(`Define '${define}' from '${data.url}' already registered from '${plugins[data.name].url}'`)
    } else {
      defines[define] = dataDefines[define]
    }
  })
}

export const loadPluginProvides = (data: Plugin) => {
  const dataProvides: PluginProvides = data.provides || {}
  Object.keys(dataProvides).forEach((provide: string) => {
    if (!defines[provide]) {
      LOGGER.warn(`Provide '${provide}' from '${data.url}' is not defined`)
    } else {
      const providerData: PluginProvide = dataProvides[provide]
      providers[provide] = providers[provide] || []
      const provider: PluginProvider = {
        plugin: data.name,
        type: providerData.type,
        url: `${data.url}${providerData.url || ''}`,
        properties: {}
      }
      const providerProperties = providerData.properties || {}
      Object.keys(providerProperties).forEach((property: string) => {
        switch (defines[provide].properties[property]) {
          case 'url': {
            provider.properties[property] = `${data.url}${providerProperties[property]}`
            break
          }
          default: {
            provider.properties[property] = providerProperties[property]
            break
          }
        }
      })
      providers[provide].push(provider)
    }
  })
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
    await Promise.all(dependencyLoaders)

  } catch (error) {
    LOGGER.warn(`Failed to load plugin from '${url}'`)
    LOGGER.warn(String(error))
  }
}

export class PluginManager {
  static async loadPlugin(url: string) {
    await loadPluginInternal(url, true)
  }
  static get plugins() {
    return plugins
  }
  static get defines() {
    return defines
  }
  static get providers() {
    return providers
  }
}