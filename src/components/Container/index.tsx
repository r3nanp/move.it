import { ReactNode } from 'react'

//* CUSTOM IMPORTS
import { useAuth } from 'hooks/useAuth'
import { Sidebar } from 'components'
import * as S from './styles'

export type ContainerProps = {
  children: ReactNode
}

export const Container = ({ children }: ContainerProps) => {
  const { handleSignOut } = useAuth()

  return (
    <main>
      <Sidebar onClickClose={handleSignOut} />
      <S.Container>{children}</S.Container>
    </main>
  )
}
