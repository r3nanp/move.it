import { useContext } from 'react'
import { Sidebar } from '../components/Sidebar'
import { AuthContext } from '../contexts/AuthContext'

export default function Leaderboard() {
  const { signOut } = useContext(AuthContext)

  return (
    <>
      <Sidebar handleExit={signOut} />
    </>
  )
}
