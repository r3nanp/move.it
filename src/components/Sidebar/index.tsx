import { FormEvent, useCallback } from 'react'
import Image from 'next/image'
import Router from 'next/router'
import { useTheme } from 'hooks/useTheme'

import * as S from './styles'

export type SidebarProps = {
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
    <S.Bar>
      <header className="image-container">
        <Image
          src="/Logo.png"
          width={200}
          height={200}
          alt="Move it logo"
          className="image"
        />
      </header>
      <div className="icons">
        <S.HomeIcon onClick={handleGoExercise} />
        <S.AwardIcon onClick={handleGoLeaderboard} />
        <S.ExitIcon onClick={handleExit} />
      </div>
      <footer>
        {theme === 'light' ? (
          <S.LightIcon onClick={switchTheme} />
        ) : (
          <S.DarkIcon onClick={switchTheme} />
        )}
      </footer>
    </S.Bar>
  )
}
