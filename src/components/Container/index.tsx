import styled from 'styled-components'
import { AiOutlineGithub } from 'react-icons/ai'

export const Container = styled.main`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  > section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    padding-top: 2rem;
  }
`

export const LoginWrapper = styled.section`
  flex: 1;

  background: var(--blue);
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem;
  align-content: center;

  .image-container {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .left-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    > h2 {
      font-family: Rajdhani, sans-serif;
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--white);
    }

    > button {
      width: 50%;
      background: var(--green);
      color: var(--white);

      font-size: 1.5rem;
      margin-top: 2rem;

      height: 4rem;
      display: flex;
      align-items: center;
      justify-content: center;

      border: 0;
      border-radius: 5px;

      transition: filter 0.2s;

      &:hover {
        filter: brightness(0.9);
      }
    }
  }
`

export const GithubIcon = styled(AiOutlineGithub)`
  width: 30px;
  height: 30px;
  color: var(--white);

  margin-right: 15px;
`
