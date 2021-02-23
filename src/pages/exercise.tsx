import { useCallback, FormEvent } from 'react'
import { useRouter } from 'next/router'
import { signOut } from 'next-auth/client'

import { Container } from '../components/Container'
import { ExperienceBar } from '../components/ExperienceBar'
import { SEO } from '../components/SEO/SEO'
import { Sidebar } from '../components/Sidebar'
import { Profile } from '../components/Profile'
import { CompletedChallenges } from '../components/CompletedChallenges'
import { Countdown } from '../components/Countdown'

export default function Exercise() {
  const router = useRouter()

  const handleLogout = useCallback((event: FormEvent) => {
    event.preventDefault()

    signOut()
    router.push('/')
  }, [])

  return (
    <>
      <Sidebar />
      <Container>
        <SEO title="Move.it | Exercise" />

        <ExperienceBar />

        <section>
          <div>
            <Profile imageUrl={'https://github.com/r3nanp.png'}></Profile>
            <CompletedChallenges />

            <Countdown />
          </div>

          <div></div>
        </section>
      </Container>
    </>
  )
}
