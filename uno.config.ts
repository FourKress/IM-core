import { defineConfig, presetUno, UserConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { ImCorePreset } from './packages/styles/src/unoPreset'

export default <UserConfig>defineConfig({
  presets: [presetUno(), ImCorePreset()],
  transformers: [transformerDirectives()]
})
