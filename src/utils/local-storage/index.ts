const APP_KEY = '@MoveIt'

export function getStorageItem(key: string) {
  // There's no window in Next Static/SSR
  if (typeof window === 'undefined') return

  const data = window.localStorage.getItem(`${APP_KEY}_${key}`)
  return JSON.parse(data)
}

export function setStorageItem(key: string, value: string) {
  // There's no window in Next Static/SSR
  if (typeof window === 'undefined') return

  const data = JSON.stringify(value)
  return window.localStorage.setItem(`${APP_KEY}_${key}`, data)
}
