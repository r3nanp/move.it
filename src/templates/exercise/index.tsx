import { useSession } from 'next-auth/client'

import { CountdownProvider } from 'contexts/CountdownContext'
import { ChallengesProvider } from 'contexts/ChallengesContext'
import { useAuth } from 'hooks/useAuth'

import { SEO } from 'components/SEO'
import { Sidebar } from 'components/Sidebar'
import { Profile } from 'components/Profile'
import { Loader } from 'components/Loading'
import { Countdown } from 'components/Countdown'
import { ChallengeBox } from 'components/ChallengeBox'
import { ExperienceBar } from 'components/ExperienceBar'
import { CompletedChallenges } from 'components/CompletedChallenges'

import challenges from 'challenges.json'
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
        {loading && <Loader />}

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
