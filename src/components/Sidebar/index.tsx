import Image from 'next/image'
import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import { Bar, ExitIcon, HomeIcon, AwardIcon } from './styles'

interface SidebarProps {
  handleExit: (event: FormEvent) => void
}

export function Sidebar({ handleExit }: SidebarProps): JSX.Element {
  const { push } = useRouter()

  function handleGoExercise() {
    push('/exercise')
  }

  function handleGoLeaderboard() {
    push('/leaderboard')
  }

  return (
    <>
      <Bar>
        <Image
          src="/Logo.png"
          width={200}
          height={200}
          alt="Move it logo"
          className="image"
        />
        <div className="icons-container">
          <HomeIcon onClick={handleGoExercise} />
          <AwardIcon onClick={handleGoLeaderboard} />
          <ExitIcon onClick={handleExit} />
        </div>
      </Bar>
    </>
  )
}
