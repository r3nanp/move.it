import { FormEvent, ReactNode, useCallback } from 'react'
import { createContext } from 'use-context-selector'
import { Provider, signOut, signIn } from 'next-auth/client'

export interface AuthContextData {
  handleLogin: (event: FormEvent) => void
  handleSignOut: (event: FormEvent) => void
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
  const handleLogin = useCallback(async (event: FormEvent) => {
    event.preventDefault()

    await signIn('github', {
      callbackUrl: `${window.location.origin}/exercise`
    })
  }, [])

  const handleSignOut = useCallback(async (event: FormEvent) => {
    event.preventDefault()

    await signOut({ callbackUrl: '/' })
  }, [])

  return (
    <Provider session={pageProps}>
      <AuthContext.Provider value={{ handleLogin, handleSignOut }}>
        {children}
      </AuthContext.Provider>
    </Provider>
  )
}
