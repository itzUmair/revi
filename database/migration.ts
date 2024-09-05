import { validEnvVariables } from "@/validatedEnv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

function main() {
  const migrationClient = postgres(validEnvVariables.POSTGRES_URL, { max: 1 });
  migrate(drizzle(migrationClient), { migrationsFolder: "./drizzle" });
  migrationClient.CLOSE;
}

main();
