import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    bg: string
    white: string
    text: string
    title: string
    red: string
    green: string
    blue: string
    border: string
    'gray-line': string
    'text-highlight': string
    'blue-dark': string
    'blue-twitter': string
    'failed-button': string
    'completed-button': string
  }
}
