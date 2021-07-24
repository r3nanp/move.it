import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  align-items: center;

  span {
    font-size: 1rem;
  }
`

export const Wrapper = styled.div`
  flex: 1;
  height: 4px;
  border-radius: 4px;
  background: var(--gray-line);
  margin: 0 1.5rem;
  position: relative;

  div {
    height: 4px;
    border-radius: 4px;
    background: var(--green);

    .current-experience {
      position: absolute;
      top: 12px;

      transform: translateX(-50%);
    }
  }
`
