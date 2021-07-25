import { FormEvent, ReactNode, useCallback } from 'react'
import { createContext } from 'use-context-selector'

import {
  Provider,
  signOut as handleLogout,
  signIn as handleLogin
} from 'next-auth/client'

export interface AuthContextData {
  signIn: (event: FormEvent) => void
  signOut: (event: FormEvent) => void
}

type AuthProviderProps = {
  children: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({
  pageProps,
  children
}: AuthProviderProps): JSX.Element {
  const signIn = useCallback((event: FormEvent) => {
    event.preventDefault()
    handleLogin('github', {
      callbackUrl:
        process.env.NODE_ENV === 'production'
          ? `${process.env.PRODUCTION_URL}/exercise`
          : 'http://localhost:3000/exercise'
    })
  }, [])

  const signOut = useCallback((event: FormEvent) => {
    event.preventDefault()
    handleLogout({
      callbackUrl:
        process.env.NODE_ENV === 'production'
          ? `${process.env.PRODUCTION_URL}`
          : 'http://localhost:3000/'
    })
  }, [])

  return (
    <Provider session={pageProps}>
      <AuthContext.Provider value={{ signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    </Provider>
  )
}
