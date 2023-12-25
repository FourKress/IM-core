import { UserConfig } from 'unocss'
import { Theme } from 'unocss/preset-mini'

import { cssVarsToString, generateCssVars } from '../../utils'
import { buttonVars } from '../../vars'

export const buttonConfig: UserConfig<Theme> = {
  preflights: [
    {
      getCSS: () => cssVarsToString(generateCssVars(buttonVars))
    }
  ]
}
