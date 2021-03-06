import { createContext, ReactNode, useEffect, useState } from 'react'
import { ThemeProvider as ThemeStyledProvider } from 'styled-components'

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
  const [theme, setTheme] = useState<ThemeName>('light')
  const currentTheme = themes[theme]

  function switchTheme() {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  useEffect(() => {
    const themeStoraged = localStorage.getItem('theme')

    if (themeStoraged) {
      setTheme(JSON.parse(themeStoraged))
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('theme', JSON.stringify(theme))
  }, [theme])

  return (
    <ThemeContext.Provider value={{ switchTheme }}>
      <ThemeStyledProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeStyledProvider>
    </ThemeContext.Provider>
  )
}
