import { GetServerSidePropsContext } from 'next'
import nookies from 'nookies'

const MAX_AGE_SECONDS = 60 * 60 * 24 * 365 // 1 year
const APP_KEY = 'MoveIt'

type Cookie = {
  [key: string]: string
}

export function getCookie(
  cookieName: string,
  context: GetServerSidePropsContext
): string {
  const cookie = nookies.get(context)
  const value = `${APP_KEY}-${cookieName}`

  return cookie[value]
}

export function setCookie(name: string, value: string): Cookie {
  return nookies.set(undefined, `${APP_KEY}-${name}`, value, {
    maxAge: MAX_AGE_SECONDS
  })
}
