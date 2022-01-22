import styled, { css } from 'styled-components'
import { BiHomeAlt, BiMedal, BiMoon, BiSun, BiExit } from 'react-icons/bi'

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

  &:hover {
    fill: var(--green);
  }
`

export const Bar = styled.aside`
  background: var(--white);
  height: 100%;
  width: 6rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  left: 0;

  .image-container {
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

export const ExitIcon = styled(BiExit)`
  ${iconsCss}
`

export const LightIcon = styled(BiMoon)`
  ${iconsCss}
`

export const DarkIcon = styled(BiSun)`
  ${iconsCss}
`
