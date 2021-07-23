import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { User } from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: async (session, user: User) => {
      session.user = user

      return Promise.resolve(session)
    }
  }
}

export default (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  return NextAuth(request, response, options)
}
