import { int, varchar, mysqlTable } from "drizzle-orm/mysql-core";

export const admin = mysqlTable("admin", {
  adminid: int("adminid").primaryKey().autoincrement(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
});
