import { createEnv } from "@t3-oss/env-nextjs";
import { z } from "zod";

const env = createEnv({
  server: {
    DATABASE_URL: z.string().url(),
    NEXTAUTH_URL: z.string().url(),
    NEXTAUTH_SECRET: z.string(),
    ADMIN_EMAIL: z.string().email(),
    ADMIN_PASSWORD: z.string(),
    ADMIN_NAME: z.string(),
  },
  client: {},
  runtimeEnv: process.env as Record<string, string>,
});

export default env;
