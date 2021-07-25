import { FormEvent } from 'react'
import Image from 'next/image'
import { SEO } from 'components/SEO'

import * as S from './styles'

type SignInProps = {
  signIn: (event: FormEvent) => void
}

export function SignInTemplate({ signIn }: SignInProps): JSX.Element {
  return (
    <S.Container>
      <SEO title="Move.it | Login" />
      <S.ImageWrapper>
        <Image src="/banner.png" alt="Banner" width={760} height={660} />
      </S.ImageWrapper>

      <S.RightContent>
        <header>
          <Image
            src="/logo-full.svg"
            alt="Logo"
            width={300}
            height={300}
            className="image"
          />
        </header>

        <h2>Bem-vindo</h2>
        <p className="github">
          <S.GithubIcon />
          Faça login com seu Github para começar
        </p>

        <div className="sign-in">
          <button onClick={signIn}>Faça login</button>
        </div>
      </S.RightContent>
    </S.Container>
  )
}
