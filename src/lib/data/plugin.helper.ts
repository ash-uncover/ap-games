export interface PluginsData {
  plugins: string[]
}

export interface Plugin {
  id: string
  url: string
  name: string
  description: string
  icon: string
  thumbnail: string
  consumes?: PluginCapabilities
  provides?: PluginCapabilities
}

interface PluginCapabilities {
  [key: string]: PluginCapability
}

interface PluginCapability {

}