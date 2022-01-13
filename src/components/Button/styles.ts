import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type VariantModifier = Pick<ButtonProps, 'variant'>

const getVariant = ({ variant }: VariantModifier) => {
  const variants = {
    green: '#4cd62b',
    completed: 'var(--completed-button)',
    failed: 'var(--failed-button)',
    finished: 'var(--white)',
    default: 'var(--green)'
  }

  return variants[variant] ?? variants.default
}

export const Container = styled.button<VariantModifier>`
  ${({ variant }) => css`
    width: 100%;
    background: ${() => getVariant({ variant })};
    color: #fff;
    font-size: 1.5rem;
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 5px;
    transition: filter 0.2s;
    &:disabled {
      background: var(--white);
      color: var(--text);
      cursor: not-allowed;
    }
    &:hover {
      filter: brightness(0.9);
    }
  `}
`
