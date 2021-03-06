import styled, { css } from 'styled-components'
import { AiOutlineGithub } from 'react-icons/ai'

const contentCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

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
      ${contentCss}
      margin: 1rem;
    }
  }
`

export const LoginWrapper = styled.section`
  flex: 1;

  background: #5965e0;
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
      color: #fff;

      margin-bottom: 1rem;
    }

    > p {
      display: flex;
      align-items: center;

      font-size: 1rem;
      color: #b3b9ff;
      line-height: 1.4;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;

      button {
        width: 60%;
        background: #4cd62b;
        color: #fff;

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
    ${contentCss}
  }
`

export const GithubIcon = styled(AiOutlineGithub)`
  width: 30px;
  height: 30px;
  color: #b3b9ff;

  margin-right: 15px;
`

export const FourOhFourPage = styled.main`
  flex: 1;
  height: 100vh;
  width: 100vw;
  padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-content: center;

  .left-content {
    ${contentCss}
  }

  .right-content {
    ${contentCss}

    max-width: 500px;

    > h1 {
      font-size: 5rem;
      color: var(--blue);
      margin-bottom: 3rem;
    }

    > span {
      font: Rajdhani, sans-serif;
      font-weight: 600;
      font-size: 2rem;
      color: var(--blue);
      text-transform: uppercase;

      margin-bottom: 1rem;
    }

    > p {
      font-size: 1.2rem;
      text-align: justify;
      line-height: 1.4;
      letter-spacing: 0.0025em;

      margin-bottom: 1rem;
    }

    > a {
      padding: 1.5rem;
      color: var(--white);
      border-radius: 5px;
      background-color: var(--blue);
      text-transform: uppercase;
      font-weight: bold;

      box-shadow: 4px 7px 12px 2px rgba(0, 0, 0, 0.72);
      transition: all 0.3s;

      &:hover {
        background-color: var(--blue-dark);
      }
    }
  }
`
