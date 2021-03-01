import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { InitOptions, User } from 'next-auth'
import Providers from 'next-auth/providers'

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: async (session, user: User) => {
      return Promise.resolve({
        ...session,
        user
      })
    },
    redirect: async () => {
      return Promise.resolve(`${process.env.PRODUCTION_URL}`)
    }
  }
}

export default (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  return NextAuth(request, response, options)
}
