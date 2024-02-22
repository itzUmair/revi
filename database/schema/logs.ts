import { int, mysqlTable, timestamp, varchar } from "drizzle-orm/mysql-core";
import { user } from "./user";

export const logs = mysqlTable("logs", {
  logid: int("logid").primaryKey().autoincrement(),
  adminid: int("adminid")
    .references(() => user.userid)
    .notNull(),
  logmessage: varchar("logmessage", { length: 255 }).notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});
