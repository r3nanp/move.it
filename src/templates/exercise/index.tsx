import { useSession } from 'next-auth/client'

//* CONTEXTS
import { CountdownProvider } from 'contexts/CountdownContext'
import { ChallengesProvider } from 'contexts/ChallengesContext'
import { useAuth } from 'hooks/useAuth'

import {
  ChallengeBox,
  Countdown,
  CompletedChallenges,
  ExperienceBar,
  Profile,
  Spinner,
  SEO,
  Sidebar
} from 'components'
import challenges from '../../../challenges.json'
import * as S from './styles'

type ExerciseProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export function ExerciseTemplate({
  level,
  currentExperience,
  challengesCompleted
}: ExerciseProps): JSX.Element {
  const [session, loading] = useSession()
  const { handleSignOut } = useAuth()

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
      challenges={challenges}
    >
      <Sidebar handleExit={handleSignOut} />
      <S.Container>
        <SEO title="Move.it | Exercise" />
        {loading && <Spinner />}

        <ExperienceBar />
        <CountdownProvider>
          <S.Content>
            <div>
              {session && (
                <Profile
                  imageUrl={session.user.picture}
                  name={session.user.name}
                />
              )}
              <CompletedChallenges />
              <Countdown />
            </div>
            <div>
              <ChallengeBox />
            </div>
          </S.Content>
        </CountdownProvider>
      </S.Container>
    </ChallengesProvider>
  )
}
