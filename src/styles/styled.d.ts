import 'styled-components'

import { themes } from './theme'

export type Theme = typeof themes

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
