import { defineConfig } from "drizzle-kit";
import { validEnvVariables } from "./validatedEnv";

export default defineConfig({
  schema: "./database/schema.ts",
  out: "./drizzle",
  dialect: "postgresql",
  dbCredentials: {
    url: validEnvVariables.POSTGRES_URL,
  },
});
