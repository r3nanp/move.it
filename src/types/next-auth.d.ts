import 'next-auth'

declare module 'next-auth' {
  interface User {
    name?: string | null
    email?: string | null
    image?: string | null
    picture?: string | null
  }
}
