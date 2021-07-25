import { useContextSelector } from 'use-context-selector'
import { AuthContext } from 'contexts/AuthContext'

export function useAuth() {
  const signIn = useContextSelector(AuthContext, auth => auth.signIn)
  const signOut = useContextSelector(AuthContext, auth => auth.signOut)

  return {
    signIn,
    signOut
  }
}
