import { ReactElement } from 'react'

import Image from 'next/image'
import { useAuth } from '../hooks/useAuth'

import { SEO } from '../components/SEO/SEO'
import { LoginWrapper, GithubIcon } from '../components/Container'

export default function Home(): ReactElement {
  const { signIn } = useAuth()

  return (
    <LoginWrapper>
      <SEO title="Move.it | Login" />
      <div className="image-container">
        <Image src="/logo-gradient.png" alt="Banner" width={760} height={660} />
      </div>

      <div className="left-container">
        <header>
          <Image
            src="/logo-full.svg"
            alt="Logo"
            width={300}
            height={300}
            className="image"
          />
        </header>

        <h2>Bem vindo</h2>
        <p>
          <GithubIcon />
          Faça login com seu Github para começar
        </p>

        <div>
          <button onClick={signIn}>Faça login</button>
        </div>
      </div>
    </LoginWrapper>
  )
}
