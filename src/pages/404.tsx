import { ReactElement } from 'react'

import Link from 'next/link'
import Head from 'next/head'
import Image from 'next/image'
import { FourOhFourPage } from '../components/Container'

export default function FourOhFour(): ReactElement {
  return (
    <FourOhFourPage>
      <Head>
        <title>Página não encontrada</title>
      </Head>
      <section className="left-content">
        <Image src="/logo.svg" width={500} height={500} alt="404" />
      </section>

      <section className="right-content">
        <h1>404</h1>
        <span>Alô?</span>

        <p>
          A página que você requisitou não foi encontrada. Acho que você se
          perdeu. Os exercícios não são aqui. Vamos lá?
        </p>
        <Link href="/">
          <a>Voltar a home</a>
        </Link>
      </section>
    </FourOhFourPage>
  )
}
