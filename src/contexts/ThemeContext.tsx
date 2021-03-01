import { createContext, ReactNode, useState } from 'react'
import { ThemeProvider as ThemeStyledProvider } from 'styled-components'

import GlobalStyles from '../styles/global'
import { themes, ThemeName } from '../styles/theme'

export interface ThemeContextData {
  themeName: ThemeName
  setThemeName: (newName: ThemeName) => void

  switchTheme: () => void
}

interface ThemeProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProps): JSX.Element {
  const [themeName, setThemeName] = useState<ThemeName>('light')
  const currentTheme = themes[themeName]

  function switchTheme() {
    setThemeName(themeName === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ switchTheme, themeName, setThemeName }}>
      <ThemeStyledProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeStyledProvider>
    </ThemeContext.Provider>
  )
}
