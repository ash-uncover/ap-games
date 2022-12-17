import React, { CSSProperties } from 'react'
import { PluginManager } from './PluginManager'

export interface PluginProperties {
  provider: {
    plugin: string
    properties: { [key: string]: string }
    url: string
    type: string
  },
  style?: CSSProperties
}

export const Plugin = ({
  provider,
  style
}: PluginProperties) => {

  // Rendering //

  const pluginData = PluginManager.plugins[provider.plugin]
  const urlBase = `${pluginData.url}${provider.url}`
  const urlParams = Object.keys(provider.properties).map(prop => `${prop}=${provider.properties[prop]}`)
  const url = `${urlBase}${urlBase.includes('?') ? '&' : '?'}${urlParams.join('&')}`

  return (
    <iframe
      src={url}
      height='100%'
      width='100%'
      style={{
        ...style,
        width: '100%',
        height: '100%',
        border: 'none'
      }}
    />
  )
}