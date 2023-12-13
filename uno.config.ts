import { defineConfig, presetUno, UserConfig } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'
import { openxuiPreset } from './packages/styles/src/unoPreset'

export default <UserConfig>defineConfig({
  presets: [presetUno(), openxuiPreset()],
  transformers: [transformerDirectives()]
})
