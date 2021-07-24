import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

import * as S from './styles'

export function FourOhFour(): JSX.Element {
  return (
    <S.Container>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <S.LeftContent>
        <Image src="/logo.svg" width={500} height={500} alt="404" />
      </S.LeftContent>

      <S.RightContent>
        <h1>404</h1>
        <span>Alô?</span>

        <p>
          A página que você requisitou não foi encontrada. Acho que você se
          perdeu. Os exercícios não são aqui. Vamos lá?
        </p>
        <Link href="/">
          <a>Voltar a home</a>
        </Link>
      </S.RightContent>
    </S.Container>
  )
}
