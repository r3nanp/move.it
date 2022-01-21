import { useSession } from 'next-auth/client'

//* CUSTOM IMPORTS
import { CountdownProvider } from 'contexts/CountdownContext'
import { ChallengesProvider } from 'contexts/ChallengesContext'
import {
  ChallengeBox,
  Countdown,
  Container,
  CompletedChallenges,
  ExperienceBar,
  Profile,
  Spinner,
  SEO
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

  return (
    <ChallengesProvider
      level={user?.level}
      accessToken={session?.accessToken}
      currentExperience={user?.currentExperience}
      challengesCompleted={user?.challengesCompleted}
      challenges={challenges}
    >
      <Container>
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
      </Container>
    </ChallengesProvider>
  )
}
