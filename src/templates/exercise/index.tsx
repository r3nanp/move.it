import { useRouter } from 'next/router'
import { useSession } from 'next-auth/client'

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
import type { User } from 'types/User'
import type { ChallengeProps } from 'types/Challenges'
import * as S from './styles'

type ExerciseProps = {
  user: User
  challenges: ChallengeProps[]
}

export function ExerciseTemplate({
  user,
  challenges
}: ExerciseProps): JSX.Element {
  const [session, loading] = useSession()
  const { handleSignOut } = useAuth()
  const { push } = useRouter()

  return (
    <ChallengesProvider
      level={user.level}
      currentExperience={user.currentExperience}
      challengesCompleted={user.challengesCompleted}
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
