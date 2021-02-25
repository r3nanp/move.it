import Image from 'next/image'
import { useContext } from 'react'
import { SEO } from '../components/SEO/SEO'
import { AuthContext } from '../contexts/AuthContext'

import { LoginWrapper, GithubIcon } from '../components/Container'

export default function Home() {
  const { signIn } = useContext(AuthContext)

  return (
    <LoginWrapper>
      <SEO title="Move.it | Login" />
      <div className="image-container">
        <Image src="/" alt="Banner" width={300} height={300} />
      </div>

      <div className="left-container">
        <header>
          <Image src="/logo-full.svg" alt="Logo" width={300} height={300} className="image" />
        </header>

        <h2>Bem vindo</h2>

        <button onClick={signIn}>
          <GithubIcon /> Faça login
        </button>
      </div>
    </LoginWrapper>
  )
}
