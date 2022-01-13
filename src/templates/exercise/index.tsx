import { useRouter } from 'next/router'
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
import { User } from 'types/User'
import challenges from 'data/challenges.json'
import * as S from './styles'

type ExerciseProps = {
  level: number
  user: User
  currentExperience: number
  challengesCompleted: number
}

export function ExerciseTemplate({
  user,
  level,
  currentExperience,
  challengesCompleted
}: ExerciseProps): JSX.Element {
  const [session, loading] = useSession()
  const { handleSignOut } = useAuth()
  const { push } = useRouter()

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
      challenges={challenges}
    >
      <Sidebar
        onClickClose={handleSignOut}
        onClickHome={() => push('/')}
        onClickLeaderboard={() => push('/leaderboard')}
      />
      <S.Container>
        <SEO title="Move.it | Exercise" />
        {loading && <Spinner />}

        <ExperienceBar />

        <CountdownProvider>
          <S.Content>
            <section id="profile">
              {session && <Profile imageUrl={user.avatar} name={user.name} />}
              <CompletedChallenges />
              <Countdown />
            </section>
            <section id="challenge-box">
              <ChallengeBox />
            </section>
          </S.Content>
        </CountdownProvider>
      </S.Container>
    </ChallengesProvider>
  )
}
