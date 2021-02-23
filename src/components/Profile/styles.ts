import styled from 'styled-components'

export const Container = styled.section``

export const LeftContainer = styled.div`
  display: flex;
  align-items: center;

  .image {
    border-radius: 50%;
  }

  div {
    margin-left: 1.5rem;

    > strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--title);
    }

    > p {
      font-size: 1rem;
      margin-top: 0.5rem;

      > #level {
        margin-right: 0.5rem;
      }
    }
  }
`
