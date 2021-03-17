import styled, { css } from 'styled-components'
import { BiHomeAlt, BiMedal, BiMoon, BiSun } from 'react-icons/bi'
import { ImExit } from 'react-icons/im'

const iconsCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 2.25rem;
  height: 2.25rem;

  fill: var(--text);
  margin: 1.2rem 0;

  cursor: pointer;
  transition: all 0.2s;

  &:active {
    fill: var(--green);
  }

  &:hover {
    opacity: 0.7;
  }
`

export const Bar = styled.aside`
  background: var(--white);
  height: 100%;
  width: 5rem;
  padding: 0.7rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  > .image-container {
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 4rem;
  }
`

export const HomeIcon = styled(BiHomeAlt)`
  ${iconsCss}
`

export const AwardIcon = styled(BiMedal)`
  ${iconsCss}
`

export const ExitIcon = styled(ImExit)`
  ${iconsCss}
`

export const LightIcon = styled(BiMoon)`
  ${iconsCss}
`

export const DarkIcon = styled(BiSun)`
  ${iconsCss}
`
