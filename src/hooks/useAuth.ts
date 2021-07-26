import { useContextSelector } from 'use-context-selector'
import { AuthContext } from 'contexts/AuthContext'

export function useAuth() {
  const handleLogin = useContextSelector(AuthContext, auth => auth.handleLogin)
  const handleSignOut = useContextSelector(
    AuthContext,
    auth => auth.handleSignOut
  )

  return {
    handleSignOut,
    handleLogin
  }
}
