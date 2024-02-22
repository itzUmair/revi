import { int, varchar, timestamp, mysqlTable } from "drizzle-orm/mysql-core";
import { user } from "./user";
import { reportcategory } from "./reportcategory";
import { review } from "./review";

export const report = mysqlTable("report", {
  reportid: int("reportid").primaryKey().autoincrement(),
  userid: int("userid")
    .references(() => user.userid)
    .notNull(),
  reviewid: int("reviewid").references(() => review.reviewid),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  reportcategory: int("reportcategory")
    .references(() => reportcategory.categoryid)
    .notNull(),
  reportmessage: varchar("reportmessage", { length: 300 }),
  reportpriority: int("reportpriority").notNull(),
});
