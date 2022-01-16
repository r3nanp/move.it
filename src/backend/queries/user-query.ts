import { User } from 'types/User'
import { prisma } from 'utils/prisma'

export const getUser = async (accessToken: string) => {
  const user = await prisma.session.findUnique({
    where: {
      accessToken
    }
  })

  return user
}

export const getUserExperience = async (id: string) => {
  const xp = await prisma.user.findUnique({
    where: {
      id
    }
  })

  return xp
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
