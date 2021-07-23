import Image from 'next/image'
import { FormEvent, useCallback } from 'react'
import Router from 'next/router'

import { useTheme } from 'hooks/useTheme'
import {
  Bar,
  ExitIcon,
  HomeIcon,
  AwardIcon,
  LightIcon,
  DarkIcon
} from './styles'

interface SidebarProps {
  handleExit: (event: FormEvent) => void
}

export function Sidebar({ handleExit }: SidebarProps): JSX.Element {
  const { switchTheme, theme } = useTheme()

  const handleGoExercise = useCallback(() => {
    Router.push('/exercise')
  }, [])

  const handleGoLeaderboard = useCallback(() => {
    Router.push('/leaderboard')
  }, [])

  return (
    <>
      <Bar>
        <header className="image-container">
          <Image
            src="/Logo.png"
            width={200}
            height={200}
            alt="Move it logo"
            className="image"
          />
        </header>
        <div>
          <HomeIcon onClick={handleGoExercise} />
          <AwardIcon onClick={handleGoLeaderboard} />
          <ExitIcon onClick={handleExit} />
        </div>
        <footer>
          {theme === 'light' ? (
            <LightIcon onClick={switchTheme} />
          ) : (
            <DarkIcon onClick={switchTheme} />
          )}
        </footer>
      </Bar>
    </>
  )
}
