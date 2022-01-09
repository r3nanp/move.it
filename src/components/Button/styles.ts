import styled, { css } from 'styled-components'
import { ButtonProps } from '.'

type VariantModifier = Pick<ButtonProps, 'variant'>

const getVariant = ({ variant }: VariantModifier) => {
<<<<<<< HEAD
  switch (variant) {
    case 'green':
      return '#4cd62b'

    case 'completed':
      return 'var(--completed-button)'

    case 'failed':
      return 'var(--failed-button)'

    case 'finished':
      return 'var(--white)'

    default:
      return 'var(--green)'
  }
=======
  const variants = {
    green: '#4cd62b',
    completed: 'var(--completed-button)',
    failed: 'var(--failed-button)',
    finished: 'var(--white)',
    default: 'var(--green)'
  }

  return variants[variant] ?? variants.default
>>>>>>> main
}

export const Container = styled.button<VariantModifier>`
  ${({ variant }) => css`
    width: 100%;
    background: ${() => getVariant({ variant })};
    color: #fff;
<<<<<<< HEAD

    font-size: 1.5rem;

=======
    font-size: 1.5rem;
>>>>>>> main
    height: 4rem;
    display: flex;
    align-items: center;
    justify-content: center;
<<<<<<< HEAD

    border: 0;
    border-radius: 5px;

    transition: filter 0.2s;

=======
    border: 0;
    border-radius: 5px;
    transition: filter 0.2s;
>>>>>>> main
    &:disabled {
      background: var(--white);
      color: var(--text);
      cursor: not-allowed;
    }
<<<<<<< HEAD

=======
>>>>>>> main
    &:hover {
      filter: brightness(0.9);
    }
  `}
`
