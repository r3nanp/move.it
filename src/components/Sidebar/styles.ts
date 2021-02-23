import styled, { css } from 'styled-components'
import { FiHome } from 'react-icons/fi'
import { BiAward } from 'react-icons/bi'

const iconsCss = css`
  width: 40px;
  height: 40px;

  color: var(--text-highlight);
  margin: 1rem;
`

export const Container = styled.div``

export const Bar = styled.aside`
  position: fixed;
  height: 100%;
  width: 7rem;
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
`

export const HomeIcon = styled(FiHome)`
  ${iconsCss}
`

export const AwardIcon = styled(BiAward)`
  ${iconsCss}
`
