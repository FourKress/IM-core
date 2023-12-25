import { ButtonCssVarsConfig } from './button'
import { ThemeCssVarsConfig } from './theme'

/** 导出组件库主题样式的整体类型 */
export interface ImCoreCssVarsConfig extends ThemeCssVarsConfig, ButtonCssVarsConfig {
  [key: string]: string | undefined
}

export * from './button'
export * from './theme'
