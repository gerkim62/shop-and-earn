// Ref: https://next-auth.js.org/getting-started/typescript#module-augmentation

import { DefaultSession, DefaultUser } from "next-auth";
import { JWT, DefaultJWT } from "next-auth/jwt";
import { Role } from "@prisma/client";

declare module "next-auth" {
  interface Session {
    user: {
      id: number;
    } & DefaultUser;
  }

  interface User extends DefaultUser {
    id: number;
  }
}

declare module "next-auth/jwt" {
  interface JWT extends DefaultJWT {}
}
