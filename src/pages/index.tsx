import { useAuth } from 'hooks/useAuth'
import { SignInTemplate } from 'templates/sign-in'

export default function Home(): JSX.Element {
  const { handleLogin, isLoading } = useAuth()

  return <SignInTemplate isLoading={isLoading} handleLogin={handleLogin} />
}
