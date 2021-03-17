import {
  createContext,
  FormEvent,
  ReactElement,
  ReactNode,
  useCallback
} from 'react'

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
  children: ReactNode
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any
}

export const AuthContext = createContext({} as AuthContextData)

export function AuthProvider({
  pageProps,
  children
}: AuthProviderProps): ReactElement {
  const signIn = useCallback((event: FormEvent) => {
    event.preventDefault()
    handleLogin('github', {
      callbackUrl:
        process.env.NODE_ENV !== 'production'
          ? process.env.DEV_URL
          : process.env.PRODUCTION_URL
    })
  }, [])

  const signOut = useCallback((event: FormEvent) => {
    event.preventDefault()
    handleLogout({
      callbackUrl:
        process.env.NODE_ENV !== 'production'
          ? process.env.DEV_LOGOUT_URL
          : process.env.PRODUCTION_LOGOUT_URL
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
