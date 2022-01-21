import { FormEvent } from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useTheme } from 'hooks/useTheme'

import * as S from './styles'

export type SidebarProps = {
  onClickClose: (event: FormEvent) => void
}

export function Sidebar({ onClickClose }: SidebarProps): JSX.Element {
  const { push } = useRouter()
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
        <S.HomeIcon onClick={() => push('/exercise')} />
        <S.AwardIcon onClick={() => push('/leaderboard')} />
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
