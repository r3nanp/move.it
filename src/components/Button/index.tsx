import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Loader } from 'components/Loader'

import * as S from './styles'

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  isLoading: boolean
  variant: 'green' | 'failed' | 'completed' | 'finished'
}

function Button({ children, isLoading, variant, ...rest }: ButtonProps) {
  return (
    <S.Container variant={variant} {...rest}>
      {isLoading ? <Loader /> : children}
    </S.Container>
  )
}

export default Button
