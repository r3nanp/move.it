import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  max-width: 62rem;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    margin-left: 3.5rem;
    width: 100%;
  }
`
