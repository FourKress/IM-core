import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import wasm from 'vite-plugin-wasm'
import topLevelAwait from 'vite-plugin-top-level-await'
import unocss from 'unocss/vite'

import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'

export default defineConfig({
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url))
      },
      {
        find: /^@im-core\/(.+)$/,
        replacement: fileURLToPath(new URL('../packages/$1/src', import.meta.url))
      }
    ]
  },
  plugins: [
    vue(),
    vueJsx(),
    wasm(),
    topLevelAwait(),
    unocss(),
    AutoImport({
      resolvers: [ElementPlusResolver()]
    }),
    Components({
      resolvers: [
        ElementPlusResolver({
          importStyle: 'sass'
        })
      ]
    })
  ],
  optimizeDeps: {
    exclude: ['hello-wasm-ls']
  }
})
