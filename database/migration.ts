import { validEnvVariables } from "@/validatedEnv";
import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

async function main() {
  const migrationClient = postgres(validEnvVariables.POSTGRES_URL, { max: 1 });
  try {
    console.log("running migrations...");
    await migrate(drizzle(migrationClient), { migrationsFolder: "./drizzle" });
    console.log("migration successfull!");
  } catch (error) {
    console.error("migration not successfull!", error);
  } finally {
    await migrationClient.end();
  }
}

main();
