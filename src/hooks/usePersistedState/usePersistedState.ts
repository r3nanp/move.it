import { useState, useEffect, Dispatch, SetStateAction } from 'react'
import { getStorageItem, setStorageItem } from 'utils/local-storage'

type Response<T> = [T, Dispatch<SetStateAction<T>>]

export function usePersistedState<T>(
  key: string,
  initialState: T
): Response<T> {
  const [state, setState] = useState(() => {
    const storageValue = getStorageItem(key)

    if (storageValue) {
      return storageValue
    } else {
      return initialState
    }
  })

  useEffect(() => {
    setStorageItem(key, state)
  }, [key, state])

  return [state, setState]
}
