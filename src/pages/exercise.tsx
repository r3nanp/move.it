import { useContext } from 'react'
import { useSession } from 'next-auth/client'
import { CountdownProvider } from '../contexts/CountdownContext'
import { AuthContext } from '../contexts/AuthContext'

import { Container } from '../components/Container'
import { ExperienceBar } from '../components/ExperienceBar'
import { SEO } from '../components/SEO/SEO'
import { Sidebar } from '../components/Sidebar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'

export default function Exercise() {
  const { signOut } = useContext(AuthContext)

  const [session, loading] = useSession()

  return (
    <>
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
    </>
  )
}
