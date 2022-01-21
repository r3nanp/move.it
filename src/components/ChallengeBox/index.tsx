import { useCallback } from 'react'
import Image from 'next/image'

import { useChallenges } from 'hooks/useChallenges'
import { useCountdown } from 'hooks/useCountdown'
import * as S from './styles'

export function ChallengeBox(): JSX.Element {
  const {
    activeChallenge,
    resetChallenge,
    completeChallenge,
    isLoading
  } = useChallenges()

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
            <Image
              src={`/icons/${activeChallenge.type.toLocaleLowerCase()}.svg`}
              alt="Body"
              width={88}
              height={88}
            />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </div>

          <footer>
            <S.Button
              isFailed
              variant="opaque-red"
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </S.Button>
            <S.Button
              isLoading={isLoading}
              isFailed={false}
              variant="opaque-green"
              type="button"
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
