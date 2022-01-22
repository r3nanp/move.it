import { ReactNode, useCallback, useEffect, useState } from 'react'
import { ThemeProvider as ThemeStyledProvider } from 'styled-components'
import { createContext } from 'use-context-selector'

//* CUSTOM IMPORTS
import { GlobalStyles } from 'styles/global'
import { ThemeName, themes } from 'styles/theme'
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
  const [theme, setTheme] = useState<ThemeName>('light')
  const currentTheme = themes[theme]

  const switchTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [theme])

  useEffect(() => {
    const value = getStorageItem('theme')

    if (value !== theme) {
      setStorageItem('theme', theme)
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
