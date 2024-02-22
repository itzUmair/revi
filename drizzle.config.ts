import "dotenv/config";

import type { Config } from "drizzle-kit";

export default {
  schema: "./database/schema",
  out: "./drizzle",
  driver: "mysql2",
  dbCredentials: {
    host: process.env.MYSQL_HOST as string,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE as string,
  },
} satisfies Config;
