import { GetServerSideProps } from 'next'
import { User } from 'types/User'

import { ExerciseTemplate } from 'templates/exercise'
import { protectedRoutes } from 'utils/protected-routes'
import { getCookie } from 'utils/cookies'
import { prisma } from 'utils/prisma'

type ExerciseProps = {
  user: User
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function ExercisePage(props: ExerciseProps): JSX.Element {
  return <ExerciseTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await protectedRoutes(context)

  if (!session) {
    return { props: {} }
  }

  const level = getCookie('level', context)
  const currentExperience = getCookie('currentExperience', context)
  const challengesCompleted = getCookie('challengesCompleted', context)

  const userData = await prisma.user.findUnique({
    where: {
      email: session.user.email
    }
  })

  const user = {
    id: userData.id,
    name: userData.name,
    email: userData.email,
    avatar: userData.image
  }

  return {
    props: {
      user,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
