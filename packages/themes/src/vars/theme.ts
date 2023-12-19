/** 基础颜色主题变量 */
export const themeColors = {
  // 主色
  'color-primary': '#1751D0',
  'color-primary-hover': '#749DF7',
  'color-primary-active': '#0238AD',
  'color-primary-disabled': '#AAC0F0',

  // 错误
  'color-error': '#D54941',
  'color-error-hover': '#F6685D',
  'color-error-active': '#AD352F',
  'color-error-disabled': '#EED3D1',
  'color-error-bg': '#FFECEB',

  // 提示
  'color-prompt': '#1976F4',
  'color-prompt-hover': '#96BAEA',
  'color-prompt-active': '#1658B2',
  'color-prompt-disabled': '#D0DBEA',
  'color-prompt-bg': '#DDECFF',

  // 成功
  'color-success': '#24B276',
  'color-success-hover': '#8CDCBA',
  'color-success-active': '#07A563',
  'color-success-disabled': '#D3F1E5',
  'color-success-bg': '#D8F9EB',

  // 提示
  'color-warning': '#FFB100',
  'color-warning-hover': '#FFE099',
  'color-warning-active': '#D99700',
  'color-warning-disabled': '#F0E2C2',
  'color-warning-bg': '#FFF4DC',

  // 基础
  'color-transparent': 'transparent',
  'color-black': '#1D2129',
  'color-white': '#FFFFFF',

  // 边框主色
  'color-bd-base': '#E9EBEF',
  'color-bd-split': '#DADCE1',

  // 填充 背景 色
  'color-fill-active': '#E7EDFA',
  'color-fill-hover': '#F3F3F3',
  'color-fill-grey-dark': '#E9ECF3',
  'color-fill-grey-light': '#F9F9F9',
  'color-fill-input': '#F2F3F5',
  'color-fill-sidebar': '#EEEEEE',
  'color-fill-icon-dark': '#86909C',
  'color-fill-icon-light': '#C0C4CC',

  // 文字主色
  'color-text-title': '#1D2129',
  'color-text-subtitle': '#4E5969',
  'color-text-secondary': '#86909C',
  'color-text-placeholder': '#C0C4CC',
  'color-text-tips': '#C0C4CC',
  'color-text-disabled': '#C0C4CC'
}

/**
 * 需要生成色阶的颜色
 *
 * 例如 color-primary 将会生成 color-primary-light-[1-9] 以及 color-primary-dark-[1-9] 系列浅色与深色的变量。
 */
export const themeColorLevelsEnabledKeys: (keyof typeof themeColors)[] = [
  'color-primary',
  'color-error',
  'color-prompt',
  'color-success',
  'color-warning'
]

/** 基础边距主题变量 */
export const themeSpacing = {
  'spacing-4': '4px',
  'spacing-8': '8px',
  'spacing-12': '12px',
  'spacing-16': '16px',
  'spacing-24': '24px',
  'spacing-32': '32px',
  'spacing-40': '40px',
  'spacing-48': '48px',
  'spacing-64': '64px',
  'spacing-96': '96px',
  'spacing-160': '160px'
}

/** 基础圆角主题变量 */
export const themeBorderRadius = {
  'border-radius-2': '2px',
  'border-radius-4': '4px',
  'border-radius-8': '8px',
  'border-width-1': '1px'
}

/** 基础圆角主题变量 */
export const themeBoxShadow = {
  'box-shadow-base': '4px 4px 10px 0px rgba(0, 0, 0, 0.1)',
  'box-shadow-mid': '0px 4px 10px 0px rgba(0, 0, 0, 0.1)',
  'box-shadow-top': '6px 6px 30px 6px rgba(0, 0, 0, 0.1)'
}

/** 基础主题变量 */
export const themeVars = {
  ...themeColors,
  ...themeSpacing,
  ...themeBorderRadius,
  ...themeBoxShadow
}

/** 基础主题变量类型 */
export type ThemeCssVarsConfig = Partial<typeof themeVars>
