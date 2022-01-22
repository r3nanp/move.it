import { User } from 'types/User'
import { prisma } from 'utils/prisma'

export const getSession = async (accessToken: string) => {
  const session = await prisma.session.findUnique({
    where: {
      accessToken
    }
  })

  return session
}

export const getUser = async (id: string) => {
  const user = await prisma.user.findUnique({
    where: {
      id
    }
  })

  return user
}

type UserData = Omit<User, 'email' | 'avatar' | 'name'> & {
  id: string
  totalExperience: number
}

export const updateUser = async ({
  id,
  challengesCompleted,
  currentExperience,
  totalExperience,
  level
}: UserData) => {
  const updatedUser = await prisma.user.update({
    data: {
      level,
      currentExperience,
      challengesCompleted,
      totalExperience
    },
    where: {
      id
    }
  })

  return updatedUser
}
