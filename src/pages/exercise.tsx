import { GetServerSideProps } from 'next'
import { User } from 'types/User'
import { ChallengeProps } from 'types/Challenges'

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

  const user = await prisma.user.findUnique({
    where: {
      id: userAccessToken.userId
    }
  })

  const challenges = await prisma.challenges.findMany()

  const formattedChallenges = challenges.map(challenge => ({
    type: challenge.type,
    amount: challenge.amount,
    description: challenge.description
  }))

  const formattedUser = {
    name: user.name,
    email: user.email,
    avatar: user.image,
    level: user.level,
    challengesCompleted: user.challengesCompleted,
    currentExperience: user.currentExperience
  }

  return {
    props: {
      user: formattedUser,
      challenges: formattedChallenges
    }
  }
}
