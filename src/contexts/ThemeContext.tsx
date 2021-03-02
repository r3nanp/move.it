import { createContext, ReactNode } from 'react'
import { ThemeProvider as ThemeStyledProvider } from 'styled-components'
import { usePersistedTheme } from '../hooks/usePersistedTheme'

import GlobalStyles from '../styles/global'
import { themes, ThemeName } from '../styles/theme'

export interface ThemeContextData {
  switchTheme: () => void
}

interface ThemeProps {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProps): JSX.Element {
  const [theme, setTheme] = usePersistedTheme<ThemeName>('theme', 'light')
  const currentTheme = themes[theme]

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={{ switchTheme }}>
      <ThemeStyledProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeStyledProvider>
    </ThemeContext.Provider>
  )
}
