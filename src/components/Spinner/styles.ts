import styled, { keyframes } from 'styled-components'

const animationSpin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const StyledSvg = styled.svg`
  width: 2rem;
  height: 2rem;
  animation: ${animationSpin} 1s linear infinite;
`
