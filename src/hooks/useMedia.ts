import { useCallback, useEffect, useState } from 'react'

export const useMedia = <T>(
  queries: string[],
  values: T[],
  defaultValue: T
) => {
  const mediaQueryLists = queries.map(query => window.matchMedia(query))

  const getValue = useCallback(() => {
    const index = mediaQueryLists.findIndex(mediaQuery => mediaQuery.matches)

    return values?.[index] || defaultValue
  }, [defaultValue, mediaQueryLists, values])

  const [value, setValue] = useState<T>(getValue)

  useEffect(() => {
    const handler = () => setValue(getValue)

    mediaQueryLists.forEach(mediaQuery =>
      mediaQuery.addEventListener('change', handler)
    )

    return () =>
      mediaQueryLists.forEach(mediaQuery =>
        mediaQuery.removeEventListener('change', handler)
      )
  }, [getValue, mediaQueryLists])

  return value
}
