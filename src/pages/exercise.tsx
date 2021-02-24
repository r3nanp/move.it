import { useCallback, FormEvent } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'

import { Container } from '../components/Container'
import { ExperienceBar } from '../components/ExperienceBar'
import { SEO } from '../components/SEO/SEO'
import { Sidebar } from '../components/Sidebar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'
import { ChallengeBox } from '../components/ChallengeBox'

export default function Exercise() {
  const [session, loading] = useSession()

  const router = useRouter()

  const handleLogout = useCallback((event: FormEvent) => {
    event.preventDefault()

    signOut()
    router.push('/')
  }, [])

  return (
    <>
      <Sidebar handleExit={handleLogout} />
      <Container>
        <SEO title="Move.it | Exercise" />

        {loading && <p>Carregando..</p>}

        {session && (
          <>
            <ExperienceBar />
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
          </>
        )}

        {!session && <p>Você precisa logar!</p>}
      </Container>
    </>
  )
}
