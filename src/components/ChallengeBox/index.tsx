import { useChallenges } from '../../hooks/useChallenges'
import { useCountdown } from '../../hooks/useCountdown'

import {
  Button,
  ChallengeActive,
  ChallengeNotActive,
  Container
} from './styles'

export function ChallengeBox(): JSX.Element {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenges()

  const { resetCountdown } = useCountdown()

  const handleChallengeSucceded = () => {
    completeChallenge()
    resetCountdown()
  }

  const handleChallengeFailed = () => {
    resetChallenge()
    resetCountdown()
  }

  return (
    <Container>
      {activeChallenge ? (
        <ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <Button type="button" isFailed onClick={handleChallengeFailed}>
              Falhei
            </Button>
            <Button
              type="button"
              isFailed={false}
              onClick={handleChallengeSucceded}
            >
              Completei
            </Button>
          </footer>
        </ChallengeActive>
      ) : (
        <ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </ChallengeNotActive>
      )}
    </Container>
  )
}
