import { NextApiRequest, NextApiResponse } from 'next'
import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

const options = {
  site: process.env.NEXT_URL,
  callbacks: {
    signIn: async (user, session) => {
      session.id = user.id
      return Promise.resolve(session)
    },
    redirect: async (url: string, baseUrl: string) => {
      return Promise.resolve('http://localhost:3000/exercise')
    }
  },
  providers: [
    Providers.GitHub({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET
    })
  ]
}

export default (request: NextApiRequest, response: NextApiResponse) => {
  NextAuth(request, response, options)
}
