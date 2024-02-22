import { int, varchar, mysqlTable } from "drizzle-orm/mysql-core";

export const owner = mysqlTable("owner", {
  ownerid: int("ownerid").primaryKey().autoincrement(),
  email: varchar("email", { length: 255 }).notNull(),
  password: varchar("password", { length: 255 }).notNull(),
  phone: varchar("phone", { length: 13 }).notNull(),
});
