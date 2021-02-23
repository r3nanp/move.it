import { FormEvent, useCallback } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import { Container } from '../components/Container'
import { SEO } from '../components/SEO/SEO'

export default function Home() {
  const router = useRouter()

  const handleSignIn = useCallback((event: FormEvent) => {
    event.preventDefault()
    signIn()

    router.push('/exercise')
  }, [])

  return (
    <Container>
      <SEO title="Move.it | Login" />

      <button onClick={handleSignIn}>Faça login</button>
    </Container>
  )
}
