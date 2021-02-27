import { createContext, FormEvent, useCallback } from 'react'
import {
  Provider,
  signOut as handleLogout,
  signIn as handleLogin
} from 'next-auth/client'

export interface AuthContextData {
  signIn: (event: FormEvent) => void
  signOut: (event: FormEvent) => void
}

interface AuthProviderProps {
  children: React.ReactNode
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
    handleLogin('github', { callbackUrl: process.env.DEV_URL })
  }, [])

  const signOut = useCallback((event: FormEvent) => {
    event.preventDefault()
    handleLogout({ callbackUrl: process.env.NEXTAUTH_URL })
  }, [])

  return (
    <Provider session={pageProps}>
      <AuthContext.Provider value={{ signIn, signOut }}>
        {children}
      </AuthContext.Provider>
    </Provider>
  )
}
