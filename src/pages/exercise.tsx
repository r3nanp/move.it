import { useContext } from 'react'
import { GetServerSideProps, GetServerSidePropsContext } from 'next'

import { useSession } from 'next-auth/client'
import { CountdownProvider } from '../contexts/CountdownContext'
import { ChallengesProvider } from '../contexts/ChallengesContext'
import { AuthContext } from '../contexts/AuthContext'

import { Container } from '../components/Container'
import { ExperienceBar } from '../components/ExperienceBar'
import { SEO } from '../components/SEO/SEO'
import { Sidebar } from '../components/Sidebar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'

interface ExerciseProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Exercise(props: ExerciseProps) {
  const { level, currentExperience, challengesCompleted } = props

  const { signOut } = useContext(AuthContext)

  const [session, loading] = useSession()

  return (
    <ChallengesProvider
      level={level}
      currentExperience={currentExperience}
      challengesCompleted={challengesCompleted}
    >
      <Sidebar handleExit={signOut} />
      <Container>
        <SEO title="Move.it | Exercise" />

        {loading && <p>Carregando..</p>}

        {session && (
          <>
            <ExperienceBar />
            <CountdownProvider>
              <section>
                <div>
                  <Profile
                    imageUrl={session.user.image}
                    name={session.user.name}
                  />
                  <CompletedChallenges />
                  <Countdown />
                </div>
                <div>
                  <ChallengeBox />
                </div>
              </section>
            </CountdownProvider>
          </>
        )}

        {!session && <p>Você precisa logar!</p>}
      </Container>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const cookies = context.req.cookies

  const { level, currentExperience, challengesCompleted } = cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
