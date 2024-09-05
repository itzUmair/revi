import z from "zod";

const envSchema = z.object({
  POSTGRES_URL: z.string().url(),
});

export const validEnvVariables = envSchema.parse({
  POSTGRES_URL: process.env.POSTGRES_URL,
});
