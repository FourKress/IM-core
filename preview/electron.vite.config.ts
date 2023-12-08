import { resolve, join } from 'path';
import { defineConfig, externalizeDepsPlugin } from 'electron-vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import wasm from 'vite-plugin-wasm';

import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';

export default defineConfig({
  main: {
    plugins: [externalizeDepsPlugin()],
  },
  preload: {
    plugins: [externalizeDepsPlugin()],
  },
  renderer: {
    resolve: {
      alias: [
        {
          find: '@renderer',
          replacement: resolve(__dirname, 'src/renderer/src'),
        },
        {
          find: /^@im-core\/(.+)$/,
          replacement: join(__dirname, '..', 'packages', '$1', 'src'),
        },
      ],
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@use "@renderer/assets/theme.scss" as *;`,
        },
      },
    },
    plugins: [
      vue(),
      vueJsx(),
      wasm(),
      AutoImport({
        resolvers: [ElementPlusResolver()],
      }),
      // Components({
      //   resolvers: [ElementPlusResolver()],
      // }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: 'sass',
            // directives: true,
            // version: "2.1.5",
          }),
        ],
      }),
    ],
    optimizeDeps: {
      exclude: ['hello-wasm-ls'],
    },
  },
});
