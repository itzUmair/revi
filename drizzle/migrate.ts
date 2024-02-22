import createConnection from "@/database";
import "dotenv/config";
import { migrate } from "drizzle-orm/mysql2/migrator";

const createMigration = async () => {
  const { connection, db } = await createConnection();
  await migrate(db, { migrationsFolder: "./drizzle" });
  await connection.end();
};

createMigration();
