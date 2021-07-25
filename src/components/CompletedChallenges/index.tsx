import { useChallenges } from 'hooks/useChallenges'
import * as S from './styles'

export function CompletedChallenges(): JSX.Element {
  const { challengesCompleted } = useChallenges()

  return (
    <S.Container>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </S.Container>
  )
}
