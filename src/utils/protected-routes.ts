import { GetServerSidePropsContext } from 'next'
import { getSession, Session } from 'next-auth/client'

export async function protectedRoutes(
  context: GetServerSidePropsContext
): Promise<Session> {
  const session = await getSession(context)

  if (!session) {
    context.res.setHeader('Location', `/?callbackUrl=${context.resolvedUrl}`)
    context.res.statusCode = 302
  }

  return session
}
