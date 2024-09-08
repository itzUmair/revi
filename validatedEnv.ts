import z from "zod";

import { config } from "dotenv";

config({
  path: ".env.local",
});

const envSchema = z.object({
  POSTGRES_URL: z.string().url(),
  NEXTAUTH_SECRET: z.string(),
});

export const validEnvVariables = envSchema.parse({
  POSTGRES_URL: process.env.POSTGRES_URL,
  NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
});
