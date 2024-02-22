import { varchar, int, timestamp, mysqlTable } from "drizzle-orm/mysql-core";
import { admin } from "./admin";

export const logs = mysqlTable("logs", {
  logid: int("logid").primaryKey().autoincrement(),
  adminid: int("adminid")
    .references(() => admin.adminid)
    .notNull(),
  logmessage: varchar("logmessage", { length: 255 }).notNull(),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
});
