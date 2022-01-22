import { ReactNode, useCallback, useEffect, useState } from 'react'
import { ThemeProvider as ThemeStyledProvider } from 'styled-components'
import { createContext } from 'use-context-selector'

//* CUSTOM IMPORTS
import { GlobalStyles } from 'styles/global'
import { ThemeName, themes } from 'styles/theme'
import { usePrefersDarkMode } from 'hooks/usePrefersDarkMode'
import { getStorageItem, setStorageItem } from 'utils/local-storage'

export type ThemeContextData = {
  switchTheme: () => void
  theme: ThemeName
}

type ThemeProps = {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProps): JSX.Element {
  const prefersDarkMode = usePrefersDarkMode()

  const prefer = prefersDarkMode ? 'light' : 'dark'

  const [theme, setTheme] = useState<ThemeName>(prefer)
  const currentTheme = themes[theme]

  useEffect(() => {
    const value = getStorageItem('theme')
    setTheme(value === 'light' ? 'light' : 'dark')
  }, [theme])

  const switchTheme = useCallback(() => {
    if (theme === 'dark') {
      setTheme(theme === 'dark' ? 'light' : 'dark')
      setStorageItem('theme', 'light')
    } else {
      setTheme(theme === 'light' ? 'dark' : 'light')
      setStorageItem('theme', 'dark')
    }
  }, [theme])

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      <ThemeStyledProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeStyledProvider>
    </ThemeContext.Provider>
  )
}
