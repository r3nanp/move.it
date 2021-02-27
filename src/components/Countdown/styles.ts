import styled from 'styled-components'

export const Container = styled.section`
  display: flex;
  align-items: center;

  font-family: Rajdhani, sans-serif;
  font-weight: 600;
  color: var(--title);
  > div {
    flex: 1;

    display: flex;
    align-items: center;
    justify-content: space-evenly;

    background: var(--white);
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);
    border-radius: 5px;
    font-size: 8.5rem;
    text-align: center;

    > span {
      flex: 1;
    }

    span:first-child {
      border-right: 1px solid #f0f1f3;
    }
    span:last-child {
      border-left: 1px solid #f0f1f3;
    }
  }

  > span {
    font-size: 6.25rem;
    margin: 0.5rem;
  }
`

interface IsActiveProps {
  isActive: boolean
}

export const StartCountdown = styled.button<IsActiveProps>`
  width: 100%;
  height: 5rem;

  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;

  color: var(--white);
  background: ${props => (props.isActive ? 'var(--red)' : 'var(--blue)')};

  font-size: 1.25rem;
  font-weight: 600;

  transition: all 0.2s;

  &:disabled {
    background: var(--white);
    color: var(--text);
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background: ${props =>
      props.isActive ? 'var(--red-dark)' : 'var(--blue-dark)'};
  }
`
