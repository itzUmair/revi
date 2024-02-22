import { varchar, int, mysqlTable } from "drizzle-orm/mysql-core";
import { business } from "./business";

export const socials = mysqlTable("socials", {
  socialid: int("socialid").primaryKey().autoincrement(),
  businessid: int("businessid")
    .references(() => business.businessid)
    .notNull(),
  socialname: varchar("socialname", { length: 50 }).notNull(),
  sociallink: varchar("sociallink", { length: 255 }).notNull(),
});
