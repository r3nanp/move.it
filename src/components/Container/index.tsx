import styled from 'styled-components'
import { AiOutlineGithub } from 'react-icons/ai'

export const Container = styled.main`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-left: 3.5rem;
    width: 100%;
  }

  > section {
    flex: 1;

    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 6.25rem;
    align-content: center;

    padding-top: 2rem;

    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin: 1rem;
    }
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
    background-image: url('/logo-gradient.png') no-repeat center;
    background-size: contain;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .left-container {
    display: flex;
    flex-direction: column;

    > h2 {
      text-align: left;
      font-family: Rajdhani, sans-serif;
      font-size: 2.5rem;
      font-weight: 600;
      color: var(--white);

      margin-bottom: 1rem;
    }

    > p {
      display: flex;
      align-items: center;

      font-size: 1rem;
      color: var(--text-highlight);
      line-height: 1.4;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        width: 60%;
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
  }

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const GithubIcon = styled(AiOutlineGithub)`
  width: 30px;
  height: 30px;
  color: var(--text-highlight);

  margin-right: 15px;
`
