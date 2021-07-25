import { useContextSelector } from 'use-context-selector'
import { ThemeContext } from 'contexts/ThemeContext'

export function useTheme() {
  const switchTheme = useContextSelector(
    ThemeContext,
    theme => theme.switchTheme
  )
  const theme = useContextSelector(ThemeContext, theme => theme.theme)

  return {
    switchTheme,
    theme
  }
}
