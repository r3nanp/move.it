import { User } from '@prisma/client'
import { Container, SEO } from 'components'

import * as S from './styles'

export function LeaderboardTemplate({ users }: { users: User[] }) {
  return (
    <Container>
      <SEO title="Move.it | Leaderboard" />

      <S.Leaderboard>
        <S.Header>
          <h1>Leaderboard</h1>
        </S.Header>

        <S.TableContainer>
          <table>
            <thead>
              <tr>
                <th>POSIÇÃO</th>
                <th>USUÁRIO</th>
                <th>DESAFIOS</th>
                <th>EXPERIÊNCIA</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={String(index + 1)}>
                  <td className="position">{index + 1}</td>
                  <td className="user">
                    <img src={user.image} alt={user.name} />
                    <div>
                      <strong>{user.name}</strong>
                      <span>
                        <img src="/icons/level.svg" alt="Level" />
                        <span>Level {user.level}</span>
                      </span>
                    </div>
                  </td>
                  <td className="challenges">
                    <span>{user.challengesCompleted}</span>
                    <span> completados</span>
                  </td>
                  <td className="experience">
                    <span>{user.currentExperience}</span>
                    <span> xp</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </S.TableContainer>
      </S.Leaderboard>
    </Container>
  )
}
