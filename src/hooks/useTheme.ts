import { useContext } from 'react'
import { ThemeContext, ThemeContextData } from '../contexts/ThemeContext'

export function useTheme(): ThemeContextData {
  const context = useContext(ThemeContext)

  return context
}
