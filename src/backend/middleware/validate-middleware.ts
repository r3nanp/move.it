import { NextApiHandler, NextApiRequest, NextApiResponse } from 'next'
import { OptionalObjectSchema, ObjectShape } from 'yup/lib/object'

export function validate(
  schema: OptionalObjectSchema<ObjectShape>,
  handler: NextApiHandler
) {
  return async (request: NextApiRequest, response: NextApiResponse) => {
    const allowedMethods = ['PUT']

    if (allowedMethods.includes(request.method)) {
      try {
        request.body = await schema.validate(request.body, {
          stripUnknown: true
        })
      } catch (error) {
        return response.status(400).json({ status: 'error', message: error })
      }
    } else {
      return response
        .status(405)
        .json({ status: 'error', message: 'Method not allowed' })
    }

    await handler(request, response)
  }
}
