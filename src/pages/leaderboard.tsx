import { GetServerSideProps } from 'next'
import { prisma } from 'utils/prisma'
import { protectedRoutes } from 'utils/protected-routes'

import { LeaderboardTemplate } from 'templates/leaderboard'
import { User } from '@prisma/client'

export default function Leaderboard({ users }: { users: User[] }): JSX.Element {
  return <LeaderboardTemplate users={users} />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  const users = await prisma.user.findMany({
    orderBy: { totalExperience: 'desc' }
  })

  const usersFormatted = users.map(user => ({
    ...user,
    createdAt: JSON.stringify(user.createdAt),
    updatedAt: JSON.stringify(user.updatedAt)
  }))

  return {
    props: {
      users: usersFormatted
    }
  }
}
