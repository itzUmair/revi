import { validEnvVariables } from "@/validatedEnv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";

function createConnection() {
  const queryClient = postgres(validEnvVariables.POSTGRES_URL);
  const db = drizzle(queryClient);
  return { queryClient, db };
}

export default createConnection;
