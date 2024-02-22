import { int, mysqlEnum, mysqlTable, varchar } from "drizzle-orm/mysql-core";

export const user = mysqlTable("user", {
  userid: int("userid").primaryKey().autoincrement(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  role: mysqlEnum("role", ["admin", "owner", "user"]),
});
