import { PrismaAdapter } from "@auth/prisma-adapter"
import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"
import { prisma } from "@/lib/prisma";


export const authOptions = {
  adapter: PrismaAdapter(prisma),
  session: {
    strategy: "jwt" as const,
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    })
    ],
    callbacks: {
        //@ts-ignore
        session({ session, token}) {
            if (token && session.user) {
                session.user.id = token.sub!
            }
            return session
        }
    }
    

}

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST}