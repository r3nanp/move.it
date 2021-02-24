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
  height: 100%;
  width: 5rem;
  padding: 0.7rem;
  background: var(--white);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  img {
    background: var(--blue);
  }

  .icons-container {
    display: flex;
    flex-direction: column;
    align-items: center;
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
