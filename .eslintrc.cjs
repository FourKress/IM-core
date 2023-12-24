/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  'extends': [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier/skip-formatting'
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  plugins: [
    'vue',
    'simple-import-sort',
    'import'
  ],
  rules: {
    'vue/multi-word-component-names': 'off',
    'simple-import-sort/imports': [
      'error',
      {
        groups: [
          // vue放在首行
          ['^vue', '^@?\\w'],
          // 内部导入
          ['^(@|components)(/.*|$)'],
          // 父级导入. 把 `..` 放在最后.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // 同级导入. 把同一个文件夹.放在最后
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // 样式导入.
          ['^.+\\.?(css)$'],
          // 带有副作用导入，比如import 'a.css'这种.
          ['^\\u0000']
        ]
      }
    ],
    'simple-import-sort/exports': 'error',// 导出
    'import/no-duplicates': 'error',// 合并同一个导入。ide自动导入，会导致impoprt {a} from 'A'和impoprt {a1} from 'A'导入2次
    'import/first': 'error', // 确保所有导入位于文件的顶部
    'import/newline-after-import': 'error' // 确保在导入后有换行符
  }
}
