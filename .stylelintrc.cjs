module.exports = {
  // 继承的预设，这些预设包含了规则集插件
  extends: [
    // 样式属性顺序规则
    'stylelint-config-recess-order',
    // 基本 scss 规则
    'stylelint-config-standard-scss',
    // scss vue 规则
    'stylelint-config-recommended-vue/scss',
    'stylelint-prettier/recommended'
  ],
  rules: {
    'selector-class-pattern': null,
    'scss/at-import-no-partial-leading-underscore': null,
    'prettier/prettier': [true, { singleQuote: true }]
  }
}
