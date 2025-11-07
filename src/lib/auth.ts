/* eslint-disable @typescript-eslint/no-explicit-any */



import { PrismaAdapter } from "@auth/prisma-adapter";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { prisma } from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id;
        token.username = user.username || null;
      }
      return token;
    },
    async session({ session, token }: any) {
      if (token && session.user) {
        session.user.id = token.sub!;
        session.user.username = token.username as string | null;
        if (!session.user.username) {
          const dbUser = await prisma.user.findUnique({
            where: { email: session.user.email },
          });
          session.user.username = dbUser?.username || null;
        }
      }
      return session;
    },
  },
  events: {
    async createUser({ user }) {
      const random = Math.floor(Math.random() * 10000);
      const username = `${user.name?.split(" ")[0].toLowerCase()}${random}`;
      await prisma.user.update({
        where: { id: user.id },
        data: { username },
      });
    },
  },
};
