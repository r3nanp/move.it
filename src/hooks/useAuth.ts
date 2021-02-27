import { useContext } from 'react'
import { AuthContext, AuthContextData } from '../contexts/AuthContext'

export function useAuth(): AuthContextData {
  const context = useContext(AuthContext)

  return context
}
