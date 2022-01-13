import { FormEvent } from 'react'
import Image from 'next/image'
import { useTheme } from 'hooks/useTheme'

import * as S from './styles'

export type SidebarProps = {
  onClickClose: (event: FormEvent) => void
  onClickLeaderboard: () => void
  onClickHome: () => void
}

export function Sidebar({
  onClickClose,
  onClickHome,
  onClickLeaderboard
}: SidebarProps): JSX.Element {
  const { switchTheme, theme } = useTheme()

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
        <S.HomeIcon onClick={onClickHome} />
        <S.AwardIcon onClick={onClickLeaderboard} />
        <S.ExitIcon onClick={onClickClose} />
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
