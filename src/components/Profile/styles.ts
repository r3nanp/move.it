import styled from 'styled-components'

export const Container = styled.div`
  margin-top: 0.5rem;

  display: flex;
  align-items: center;

  .image-wrapper {
    img {
      border-radius: 50%;
      width: 5.5rem;
      height: 5.5rem;
    }
  }

  .profile-content {
    margin-left: 1.5rem;

    strong {
      font-size: 1.5rem;
      font-weight: 600;
      color: var(--title);
    }

    .level {
      font-size: 1rem;
      margin-top: 0.5rem;

      img {
        margin-right: 0.5rem;
      }
    }
  }
`
