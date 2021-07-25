import styled from 'styled-components'
import { AiOutlineGithub } from 'react-icons/ai'

export const Container = styled.main`
  flex: 1;

  background: #5965e0;
  height: 100vh;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 8rem;
  align-content: center;

  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`

export const ImageWrapper = styled.section`
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const RightContent = styled.section`
  display: flex;
  flex-direction: column;

  h2 {
    text-align: left;
    font-family: Rajdhani, sans-serif;
    font-size: 2.5rem;
    font-weight: 600;
    color: #fff;

    margin-bottom: 1rem;
  }

  .github {
    display: flex;
    align-items: center;

    font-size: 1rem;
    color: #b3b9ff;
    line-height: 1.4;
  }

  .sign-in {
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
`

export const GithubIcon = styled(AiOutlineGithub)`
  width: 30px;
  height: 30px;
  color: #b3b9ff;

  margin-right: 15px;
`
