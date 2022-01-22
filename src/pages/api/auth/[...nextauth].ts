import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth, { User, InitOptions } from 'next-auth'
import Providers from 'next-auth/providers'
import { PrismaClient } from '@prisma/client'
import Adapters from 'next-auth/adapters'

import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from 'constants/auth'

const prisma = new PrismaClient()

const options: InitOptions = {
  providers: [
    Providers.GitHub({
      clientId: GITHUB_CLIENT_ID,
      clientSecret: GITHUB_CLIENT_SECRET
    })
  ],
  callbacks: {
    session: async (session, user: User) => {
      session.user = user

      return Promise.resolve(session)
    }
  },
  adapter: Adapters.Prisma.Adapter({
    prisma
  })
}

export default (
  request: NextApiRequest,
  response: NextApiResponse
): Promise<void> => {
  return NextAuth(request, response, options)
}
