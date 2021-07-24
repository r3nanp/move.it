import { GetServerSideProps } from 'next'

import { ExerciseTemplate } from 'templates/exercise'
import { protectedRoutes } from 'utils/protected-routes'
import { getCookie } from 'utils/cookies'

type ExerciseProps = {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function ExercisePage(props: ExerciseProps): JSX.Element {
  return <ExerciseTemplate {...props} />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await protectedRoutes(context)

  const level = getCookie('level', context)
  const currentExperience = getCookie('currentExperience', context)
  const challengesCompleted = getCookie('challengesCompleted', context)

  if (!session) {
    return { props: {} }
  }

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
