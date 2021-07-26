import 'styled-components'
import { ThemeName, themes } from './theme'

type Theme = typeof themes[ThemeName]

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
