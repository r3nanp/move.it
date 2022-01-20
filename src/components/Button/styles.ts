import styled, { css } from 'styled-components'
import { Variant, Variants } from '.'

type Modifier = {
  variant?: Variant
}

const getBackground = (variant: Variant) => {
  const variants: Variants = {
    green: '#4cd62b',
    'opaque-green': 'var(--completed-button)',
    'opaque-red': 'var(--failed-button)',
    red: 'var(--red)'
  }

  return variants[variant] ?? variants.green
}

const getColor = (variant: Variant) => {
  const variants: Variants = {
    green: 'var(--white)',
    red: 'var(--white)',
    'opaque-green': 'var(--green)',
    'opaque-red': 'var(--red)'
  }

  return variants[variant] ?? variants.green
}

export const Container = styled.button<Modifier>`
  ${({ variant }) => css`
    width: 100%;
    background: ${getBackground(variant)};
    color: ${getColor(variant)};
    font-size: 1rem;
    height: 4rem;
    display: flex;
    align-items: center;
    font-weight: 600;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    transition: all 0.2s ease-in-out;
    &:disabled {
      background: var(--white);
      color: var(--text);
      cursor: not-allowed;
    }
  `}
`
