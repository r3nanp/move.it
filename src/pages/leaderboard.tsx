import { GetServerSideProps } from 'next'
import { protectedRoutes } from 'utils/protected-routes'

import { LeaderboardTemplate } from 'templates/leaderboard'

export default function Leaderboard(): JSX.Element {
  return <LeaderboardTemplate />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }
}
