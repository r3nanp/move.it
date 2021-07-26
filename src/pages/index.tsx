import { useAuth } from 'hooks/useAuth'
import { SignInTemplate } from 'templates/sign-in'

export default function Home(): JSX.Element {
  const { handleLogin } = useAuth()

  return <SignInTemplate handleLogin={handleLogin} />
}
