import { FormEvent, ReactNode, useCallback, useState } from 'react'
import { createContext } from 'use-context-selector'
import { Provider, signOut, signIn } from 'next-auth/client'

export interface AuthContextData {
  isLoading: boolean
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
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = useCallback(async (event: FormEvent) => {
    setIsLoading(true)

    event.preventDefault()

    await signIn('github', {
      callbackUrl: `${window.location.origin}/exercise`
    })
    setIsLoading(false)
  }, [])

  const handleSignOut = useCallback(async (event: FormEvent) => {
    event.preventDefault()

    await signOut({ callbackUrl: '/' })
  }, [])

  return (
    <Provider session={pageProps}>
      <AuthContext.Provider value={{ handleLogin, handleSignOut, isLoading }}>
        {children}
      </AuthContext.Provider>
    </Provider>
  )
}
