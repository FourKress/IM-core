import { fileURLToPath, URL } from 'node:url'
// import { join } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import wasm from 'vite-plugin-wasm'
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
      }
      // {
      //   find: /^@im-core\/(.+)$/,
      //   replacement: join(__dirname, '..', 'packages', '$1', 'src'),
      // },
    ]
  },
  // css: {
  //   preprocessorOptions: {
  //     scss: {
  //       additionalData: `@use "@/assets/theme.scss" as *;`,
  //     },
  //   },
  // },
  plugins: [
    vue(),
    vueJsx(),
    wasm(),
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
