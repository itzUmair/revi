import {
  boolean,
  decimal,
  int,
  mysqlTable,
  varchar,
} from "drizzle-orm/mysql-core";
import { user } from "./user";

export const business = mysqlTable("business", {
  businessid: int("businessid").primaryKey().autoincrement(),
  ownerid: int("ownerid")
    .references(() => user.userid)
    .notNull(),
  name: varchar("name", { length: 100 }).notNull(),
  city: varchar("city", { length: 100 }).notNull(),
  country: varchar("country", { length: 100 }).notNull(),
  address: varchar("address", { length: 255 }).notNull(),
  email: varchar("email", { length: 255 }).notNull(),
  rating: decimal("rating").notNull(),
  phone: varchar("phone", { length: 13 }).notNull(),
  website: varchar("website", { length: 255 }),
  description: varchar("description", { length: 1000 }).notNull(),
  isverified: boolean("isverified").default(false),
});
