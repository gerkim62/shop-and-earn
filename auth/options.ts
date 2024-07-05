import env from "@/constants/env";
import prisma from "@/lib/prisma";
import { AuthOptions } from "next-auth";
import credentialsProvider from "next-auth/providers/credentials";

const authOptions: AuthOptions = {
  secret: env.NEXTAUTH_SECRET,
  providers: [
    credentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          return null;
        }

        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (user?.password === credentials.password) {
          return {
            ...user,
            name: user.fullName,
          };
        }

        return null;
      },
    }),
  ],
};

export default authOptions;
