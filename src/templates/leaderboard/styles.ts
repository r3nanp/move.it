import styled from 'styled-components'

export const Container = styled.main`
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
`

export const Leaderboard = styled.section`
  display: flex;
  flex-direction: column;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;

  > h1 {
    font-size: 1.5rem;
  }
`

export const TableContainer = styled.section`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  table {
    max-width: 960px;
    width: 100%;
    height: 100%;
    border-spacing: 0 0.8rem;
    thead {
      tr,
      td {
        font-size: 1.2rem;
        font-weight: 400;
        padding: 1.2rem 1.5rem;
        text-align: center;
      }
    }
    tbody {
      tr {
        transition: opacity 0.2s;
        td {
          font-size: 1.2rem;
          font-weight: 400;
          padding: 1.2rem 1.5rem;
          text-align: center;
          background: var(--primary);
          color: var(--text);
          font-size: 1rem;
        }

        .user {
          display: flex;
          align-items: center;
          > img {
            width: 64px;
            height: 64px;
            border-radius: 50%;
          }
          > div {
            margin-left: 1rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            strong {
            }
            > span {
              margin-top: 5px;
              > span {
                margin-left: 5px;
              }
            }
          }
        }
        .challenges,
        .experience {
          span:first-child {
            color: var(--green);
          }
        }

        .position {
          border-radius: 5px 0 0 5px;
          background: var(--blue);
          font-size: 1.4rem;
          font-weight: bold;
          color: var(--white);
        }
        td:last-child {
          border-radius: 0 5px 5px 0;
        }
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
`
