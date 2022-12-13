import { LogLevels } from "@uncover/js-utils-logger"
import Logger from "@uncover/js-utils-logger/dist/Logger"

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
  properties: { [key: string]: string }
}

interface PluginProvides {
  [key: string]: PluginProvide
}

interface PluginProvide {
  [key: string]: string
}

interface PluginProviders {
  [key: string]: PluginProvider[]
}

interface PluginProvider {
  plugin: string
  url: string
  type: string
  properties: PluginProviderProperties
}

interface PluginProviderProperties {
  [key: string]: string
}

const LOGGER = new Logger('PluginManager', LogLevels.DEBUG)

const plugins: Plugins = {}
const defines: PluginDefines = {}
const providers: PluginProviders = {}

const checkPlugin = (data: Plugin) => {
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

const loadPluginInternal = async (url: string, master: boolean) => {
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: new Headers()
    })
    const data = await response.json()
    checkPlugin(data)
    if (plugins[data.name]) {
      LOGGER.warn(`Plugin '${data.name}' from '${data.url}' already registered from '${plugins[data.name].url}'`)
    } else {
      plugins[data.name] = data
    }
    Object.keys(data.defines).forEach((define) => {
      if (defines[define]) {
        LOGGER.warn(`Define '${define}' from '${data.url}' already registered from '${plugins[data.name].url}'`)
      } else {
        defines[define] = {
          ...data.defines[define],
          _providers: []
        }
      }
    })
    Object.keys(data.provides).forEach((provide) => {
      if (!defines[provide]) {
        LOGGER.warn(`Provide '${provide}' from '${data.url}' is not defined`)
      } else {
        const providerData = data.provides[provide]
        providers[provide] = providers[provide] || []
        const provider: PluginProvider = {
          plugin: data.name,
          type: providerData.type,
          url: `${data.url}${providerData.url || ''}`,
          properties: {}
        }
        Object.keys(providerData.properties).forEach((property: string) => {
          switch (defines[provide].properties[property]) {
            case 'url': {
              provider.properties[property] = `${data.url}${providerData.properties[property]}`
              break
            }
            default: {
              provider.properties[property] = providerData.properties[property]
              break
            }
          }
        })
        providers[provide].push(provider)
      }
    })
    return Promise.all(data.dependencies.map((dependency: string) => loadPluginInternal(dependency, false)))
  } catch (error) {
    LOGGER.warn(`Failed to load plugin from '${url}'`)
    LOGGER.warn(String(error))
  }
}

export class PluginManager {
  static loadPlugin (url: string) {
    return loadPluginInternal(url, true)
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