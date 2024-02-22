import { varchar, int, mysqlTable } from "drizzle-orm/mysql-core";

export const reportcategory = mysqlTable("reportcategory", {
  categoryid: int("categoryid").primaryKey().autoincrement(),
  categoryname: varchar("categoryname", { length: 50 }).notNull(),
});
