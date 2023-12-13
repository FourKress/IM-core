import { UserConfig } from 'vite'
import { absCwd, generateConfig as baseGenerateConfig, GenerateConfigOptions } from '../src'

export function generateConfig(customOptions?: GenerateConfigOptions, viteConfig?: UserConfig) {
  return baseGenerateConfig(
    {
      dts: absCwd('../../tsconfig.web.json'),
      ...customOptions
    },
    viteConfig
  )
}
