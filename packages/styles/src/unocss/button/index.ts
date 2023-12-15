import { UserConfig } from 'unocss'
import { Theme } from 'unocss/preset-mini'
import { buttonVars } from '../../vars'
import { cssVarsToString, generateCssVars } from '../../utils'

export const buttonConfig: UserConfig<Theme> = {
  preflights: [
    {
      getCSS: () => cssVarsToString(generateCssVars(buttonVars))
    }
  ]
}
