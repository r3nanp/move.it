import styled, { css } from 'styled-components'

const contentCss = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Container = styled.main`
  flex: 1;
  height: 100vh;
  width: 100vw;
  padding: 0 4rem;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-items: center;

  @media screen and (max-width: 768px) {
    ${contentCss}
  }
`

export const LeftContent = styled.div`
  ${contentCss}
`

export const RightContent = styled.div`
  ${contentCss}

  max-width: 500px;

  h1 {
    font-size: 5rem;
    color: var(--blue);
    margin-bottom: 3rem;
  }

  span {
    font: Rajdhani, sans-serif;
    font-weight: 600;
    font-size: 2rem;
    color: var(--blue);
    text-transform: uppercase;

    margin-bottom: 1rem;
  }

  p {
    font-size: 1.2rem;
    text-align: justify;
    line-height: 1.4;
    letter-spacing: 0.0025em;

    margin-bottom: 1rem;
  }

  a {
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
`
