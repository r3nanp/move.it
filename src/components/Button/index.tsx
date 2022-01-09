import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Spinner } from 'components'

import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  isLoading: boolean
  variant: 'green' | 'failed' | 'completed' | 'finished'
}

export const Button = ({
  children,
  isLoading,
  variant,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container variant={variant} {...rest}>
      {isLoading ? <Spinner /> : children}
    </S.Container>
  )
}
