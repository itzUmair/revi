import {
  int,
  varchar,
  mysqlTable,
  timestamp,
  decimal,
} from "drizzle-orm/mysql-core";
import { business } from "./business";
import { user } from "./user";

export const review = mysqlTable("review", {
  reviewid: int("reviewid").primaryKey().autoincrement(),
  businessid: int("businessid").references(() => business.businessid),
  userid: int("userid").references(() => user.userid),
  timestamp: timestamp("timestamp").defaultNow().notNull(),
  rating: decimal("rating").notNull(),
  upvote: int("upvote").default(0),
  comment: varchar("comment", { length: 300 }),
});
