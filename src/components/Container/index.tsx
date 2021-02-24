import styled from 'styled-components'

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
  background: var(--blue);
  height: 100vh;

  > div {
    display: flex;
    align-items: center;
    height: 100%;

    position: relative;

    > div {
      display: flex;
      flex-direction: column;
      text-align: center;

      > h2 {
        color: var(--white);
        font-size: 2rem;
      }

      width: 25%;
      position: absolute;
      right: 60px;

      button {
        width: 100%;
        height: 5rem;

        margin-top: 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 0;
        border-radius: 5px;
      }
    }
  }
`
