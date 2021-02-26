import styled, { css } from 'styled-components'
import { FiHome } from 'react-icons/fi'
import { BiAward } from 'react-icons/bi'
import { ImExit } from 'react-icons/im'

const iconsCss = css`
  width: 40px;
  height: 40px;

  color: var(--text-highlight);
  margin: 1rem;

  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    opacity: 0.7;
  }
`

export const Bar = styled.aside`
  position: fixed;
  z-index: 1;
  left: 0;

  height: 100%;
  width: 5rem;
  padding: 0.7rem;
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;

  .icons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  @media screen and (max-width: 768px) {
    width: 4rem;

  }
`

export const HomeIcon = styled(FiHome)`
  ${iconsCss}
`

export const AwardIcon = styled(BiAward)`
  ${iconsCss}
`
export const ExitIcon = styled(ImExit)`
  ${iconsCss}
`
