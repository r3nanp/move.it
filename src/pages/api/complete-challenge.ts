import { NextApiRequest, NextApiResponse } from 'next'
import {
  getSession,
  getUser,
  validate,
  userSchemaValidation,
  updateUser as prismaUpdateUser
} from 'backend'

async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      level,
      amount,
      accessToken,
      currentExperience,
      challengesCompleted
    } = req.body

    const user = await getSession(String(accessToken))
    const userXp = await getUser(user.userId)

    const totalExperience = Number(amount) + Number(userXp.totalExperience)

    const updatedUser = await prismaUpdateUser({
      id: user.userId,
      totalExperience,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    })

    return res.json({ updatedUser })
  } catch (e) {
    res.status(400).json(e)
  }
}

export async function handler(
  request: NextApiRequest,
  response: NextApiResponse
) {
  try {
    await updateUser(request, response)
    return response
      .status(200)
      .json({ ...request.body, method: request.method })
  } catch (e) {
    return response.status(500).json(e)
  }
}

export default validate(userSchemaValidation, handler)
