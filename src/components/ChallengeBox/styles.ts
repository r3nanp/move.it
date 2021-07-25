import styled from 'styled-components'

export const Container = styled.section`
  height: 100%;
  background: var(--white);
  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

  padding: 1.5rem 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  text-align: center;
`

export const ChallengeNotActive = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  strong {
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 1.4;
  }

  .description {
    display: flex;
    flex-direction: column;
    align-items: center;

    line-height: 1.4rem;
    max-width: 70%;
    margin-top: 3rem;

    > img {
      margin-bottom: 1rem;
    }
  }
`

export const ChallengeActive = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;

  header {
    color: var(--blue);
    font-weight: 600;
    font-size: 1.25rem;
    padding: 0 2rem 1.5rem;

    border-bottom: 1px solid var(--gray-line);
  }

  .challenge {
    flex: 1;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    strong {
      font-size: 2rem;
      font-weight: 600;
      color: var(--title);
      margin: 1.5rem 0 1rem;
    }
  }

  footer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 1rem;

    width: 100%;
    height: 4rem;
  }
`

type IsFailedProps = {
  isFailed: boolean
}

export const Button = styled.button<IsFailedProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  color: ${props => (props.isFailed ? 'var(--red)' : 'var(--green)')};

  border: 0;
  border-radius: 5px;

  font-size: 1rem;
  font-weight: 600;

  background: ${props =>
    props.isFailed ? 'var(--failed-button)' : 'var(--completed-button)'};

  transition: all 0.2s ease-in-out;

  &:hover {
    background: ${props => (props.isFailed ? 'var(--red)' : 'var(--green)')};
    color: var(--white);
  }
`
