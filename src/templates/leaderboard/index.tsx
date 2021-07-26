import { Sidebar } from 'components/Sidebar'
import { useAuth } from 'hooks/useAuth'

import * as S from './styles'

export function LeaderboardTemplate() {
  const { handleSignOut } = useAuth()

  return (
    <S.Container>
      <Sidebar handleExit={handleSignOut} />
    </S.Container>
  )
}
