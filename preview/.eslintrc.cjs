/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  // 指定此配置为根级配置，eslint 不会继续向上层寻找
  root: true,

  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@electron-toolkit',
    '@electron-toolkit/eslint-config-ts/eslint-recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
  ],
  rules: {
    'vue/require-default-prop': 'off',
    'vue/multi-word-component-names': 'off',
  },
};
