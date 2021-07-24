import styled from 'styled-components'
import { FaTwitter } from 'react-icons/fa'

export const Overlay = styled.section`
  background: rgba(242, 243, 245, 0.8);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;
`

export const Container = styled.div`
  background: var(--white);
  width: 100%;
  max-width: 400px;
  padding: 2rem 3rem;

  border-radius: 5px;
  box-shadow: 0 0 60px rgba(0, 0, 0, 0.5);

  text-align: center;

  position: relative;

  header {
    font-size: 8.75rem;
    font-weight: 600;
    color: var(--blue);

    background: url('/icons/levelup.svg') no-repeat center;
    background-size: contain;
  }

  strong {
    font-size: 2.25rem;
    color: var(--title);
  }

  p {
    font-size: 1.25rem;
    color: var(--text);
    margin-top: 0.25rem;
  }

  .close {
    position: absolute;
    right: 0.5rem;
    top: 0.5rem;

    background: transparent;
    border: 0;
    font-size: 0;
  }

  footer {
    margin-top: 1rem;
    width: 100%;

    .twitter {
      display: flex;
      align-items: center;
      justify-content: center;

      width: 100%;
      height: 4rem;
      border: 0;
      border-radius: 5px;
      font-size: 1.25rem;
      font-weight: 600;

      background: #f5fcff;
      color: var(--blue-twitter);
      transition: all 0.2s ease-in-out;

      &:hover {
        color: var(--white);
        background: var(--blue-twitter);
      }
    }
  }
`

export const TwitterIcon = styled(FaTwitter)`
  width: 1.5rem;
  height: 1.5rem;

  margin-left: 0.5rem;
  color: var(--blue-twitter);
  transition: all 0.2s ease-in-out;

  &:hover {
    color: var(--white);
  }
`
