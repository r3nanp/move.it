import { SEO } from '../components/SEO/SEO'
import { Sidebar } from '../components/Sidebar'
import { useAuth } from '../hooks/useAuth'

export default function Leaderboard(): JSX.Element {
  const { signOut } = useAuth()

  return (
    <>
      <Sidebar handleExit={signOut} />

      <SEO title="Move.it | Ranking" />
    </>
  )
}
