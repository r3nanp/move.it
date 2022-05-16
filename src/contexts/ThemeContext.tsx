import { ReactNode, useCallback } from 'react'
import { ThemeProvider as ThemeStyledProvider } from 'styled-components'
import { createContext } from 'use-context-selector'

//* CUSTOM IMPORTS
import { usePersistedState } from 'hooks'
import { GlobalStyles } from 'styles/global'
import { ThemeName, themes } from 'styles/theme'

export type ThemeContextData = {
  switchTheme: () => void
  theme: ThemeName
}

type ThemeProps = {
  children: ReactNode
}

export const ThemeContext = createContext({} as ThemeContextData)

export function ThemeProvider({ children }: ThemeProps): JSX.Element {
  const [theme, setTheme] = usePersistedState<ThemeName>('theme', 'light')

  const currentTheme = themes[theme]

  const switchTheme = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }, [setTheme, theme])

  return (
    <ThemeContext.Provider value={{ switchTheme, theme }}>
      <ThemeStyledProvider theme={currentTheme}>
        <GlobalStyles />
        {children}
      </ThemeStyledProvider>
    </ThemeContext.Provider>
  )
}
