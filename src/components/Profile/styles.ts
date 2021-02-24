import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;

  .image {
    border-radius: 50%;
    width: 5.5rem;
    height: 5.5rem;
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

      > img {
        margin-right: 0.5rem;
      }
    }
  }
`
