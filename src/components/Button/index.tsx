import { ReactNode, ButtonHTMLAttributes } from 'react'
import { Spinner } from 'components'
import * as S from './styles'

export type Variant = 'green' | 'red' | 'opaque-red' | 'opaque-green'
export type Variants = Record<Variant, string>

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  children: ReactNode
  isLoading?: boolean
  variant?: Variant
}

export const Button = ({
  children,
  variant = 'green',
  isLoading = false,
  ...rest
}: ButtonProps) => {
  return (
    <S.Container variant={variant} {...rest}>
      {isLoading ? <Spinner /> : children}
    </S.Container>
  )
}
