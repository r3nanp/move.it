import { GetServerSideProps } from 'next'

import { getUser } from 'backend'
import type { User } from 'types/User'
import type { ChallengeProps } from 'types/Challenges'
import { ExerciseTemplate } from 'templates/exercise'
import { protectedRoutes } from 'utils/protected-routes'
import { prisma } from 'utils/prisma'

type ExerciseProps = {
  user: User
  challenges: ChallengeProps[]
}

export default function ExercisePage(props: ExerciseProps): JSX.Element {
  return <ExerciseTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  const userAccessToken = await prisma.session.findUnique({
    where: {
      accessToken: session.accessToken
    }
  })

  const prismaUser = await getUser(userAccessToken.userId)

  const prismaChallenges = await prisma.challenges.findMany()

  const challenges = prismaChallenges.map(challenge => ({
    type: challenge.type,
    amount: challenge.amount,
    description: challenge.description
  }))

  const user = {
    name: prismaUser.name,
    email: prismaUser.email,
    avatar: prismaUser.image,
    level: prismaUser.level,
    challengesCompleted: prismaUser.challengesCompleted,
    currentExperience: prismaUser.currentExperience
  }

  return {
    props: {
      user,
      challenges
    }
  }
}
