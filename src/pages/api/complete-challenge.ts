import { NextApiRequest, NextApiResponse } from 'next'
import {
  getSession,
  getUser,
  updateUser as prismaUpdateUser
} from 'backend/queries/user-query'
import { schema } from 'backend/validations/user-validation'
import { validate } from 'backend/middleware/validate-middleware'

async function updateUser(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      level,
      currentExperience,
      challengesCompleted,
      accessToken,
      amount
    } = req.body

    const user = await getSession(String(accessToken))
    const userXp = await getUser(user.userId)

    const totalExperience = Number(amount) + Number(userXp.totalExperience)

    const updatedUser = await prismaUpdateUser({
      id: user.userId,
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted),
      totalExperience
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

export default validate(schema, handler)
