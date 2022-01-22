/* eslint-disable react-hooks/rules-of-hooks */
import { useMedia } from './useMedia'

export const usePrefersDarkMode = () => {
  // There's no window in Next Static/SSR
  if (typeof window === 'undefined') return

  return useMedia(['(prefers-color-scheme: dark)'], [true], false)
}
