import { Container, SEO } from 'components'
import * as S from './styles'

export function LeaderboardTemplate() {
  return (
    <Container>
      <SEO title="Move.it | Leaderboard" />

      <S.Leaderboard>
        <div className="progress">
          <h1>Leaderboard in progress</h1>
        </div>
      </S.Leaderboard>
    </Container>
  )
}
