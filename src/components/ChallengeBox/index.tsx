import { useCallback } from 'react'
import { useChallenges } from 'hooks/useChallenges'
import { useCountdown } from 'hooks/useCountdown'

import * as S from './styles'

export function ChallengeBox(): JSX.Element {
  const { activeChallenge, resetChallenge, completeChallenge } = useChallenges()

  const { resetCountdown } = useCountdown()

  const handleChallengeSucceeded = useCallback(() => {
    completeChallenge()
    resetCountdown()
  }, [completeChallenge, resetCountdown])

  const handleChallengeFailed = useCallback(() => {
    resetChallenge()
    resetCountdown()
  }, [resetChallenge, resetCountdown])

  return (
    <S.Container>
      {activeChallenge ? (
        <S.ChallengeActive>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <div className="challenge">
            <img src={`icons/${activeChallenge.type}.svg`} alt="Body" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </div>

          <footer>
            <S.Button type="button" isFailed onClick={handleChallengeFailed}>
              Falhei
            </S.Button>
            <S.Button
              type="button"
              isFailed={false}
              onClick={handleChallengeSucceeded}
            >
              Completei
            </S.Button>
          </footer>
        </S.ChallengeActive>
      ) : (
        <S.ChallengeNotActive>
          <strong>Finalize um ciclo para receber um desafio.</strong>
          <p className="description">
            <img src="icons/level-up.svg" alt="Level up" />
            Avance de level completando desafios.
          </p>
        </S.ChallengeNotActive>
      )}
    </S.Container>
  )
}
