import { useContext } from 'react'
import { SEO } from '../components/SEO/SEO'
import { Sidebar } from '../components/Sidebar'
import { AuthContext } from '../contexts/AuthContext'

export default function Leaderboard() {
  const { signOut } = useContext(AuthContext)

  return (
    <>
      <Sidebar handleExit={signOut} />

      <SEO title="Move.it | Ranking" />
    </>
  )
}
