import { mysqlTable, serial, varchar } from "drizzle-orm/mysql-core";

export const admin = mysqlTable("admin", {
  admin_id: serial("id").primaryKey(),
  name: varchar("name", { length: 100 }).notNull(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 100 }).notNull(),
});

// business
// business_socials
// business_reviews
// users
// user_reviews
