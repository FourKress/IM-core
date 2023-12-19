import { UserConfig } from 'unocss'
import { Theme } from 'unocss/preset-mini'
import {
  themeColors,
  themeColorLevelsEnabledKeys,
  themeSpacing,
  themeBorderRadius,
  themeBoxShadow
} from '../vars'
import { toTheme } from '../utils'

export const baseConfig: UserConfig<Theme> = {
  // 需要全局生效的主题
  theme: {
    // 颜色主题
    colors: toTheme(themeColors, {
      type: 'color',
      colorLevelsEnabledKeys: themeColorLevelsEnabledKeys,
      colorLevels: 9
    }),
    // 边距相关主题
    spacing: toTheme(themeSpacing, { type: 'spacing' }),
    // 边框
    borderRadius: toTheme(themeBorderRadius, { type: 'border-radius' }),
    // 阴影相关主题
    boxShadow: toTheme(themeBoxShadow, { type: 'box-shadow' })
    // 更多主题，自己定义...
  }
}
