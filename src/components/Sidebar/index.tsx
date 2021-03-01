import Image from 'next/image'
import { FormEvent } from 'react'
import { useRouter } from 'next/router'

import { useTheme } from '../../hooks/useTheme'
import { Bar, ExitIcon, HomeIcon, AwardIcon } from './styles'

interface SidebarProps {
  handleExit: (event: FormEvent) => void
}

export function Sidebar({ handleExit }: SidebarProps): JSX.Element {
  const { switchTheme } = useTheme()

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
        <div className="image-container">
          <Image
            src="/Logo.png"
            width={200}
            height={200}
            alt="Move it logo"
            className="image"
            onClick={switchTheme}
          />
        </div>
        <div className="icons-container">
          <HomeIcon onClick={handleGoExercise} />
          <AwardIcon onClick={handleGoLeaderboard} />
          <ExitIcon onClick={handleExit} />
        </div>
      </Bar>
    </>
  )
}
