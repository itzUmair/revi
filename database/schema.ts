import {
  integer,
  boolean,
  pgTable,
  serial,
  time,
  varchar,
  timestamp,
} from "drizzle-orm/pg-core";

export const userTypesTable = pgTable("user_types", {
  type_id: serial("type_id").primaryKey(),
  type_name: varchar("type_name", { length: 100 }).notNull().unique(),
});

export const usersTable = pgTable("users", {
  user_id: serial("user_id").primaryKey(),
  email: varchar("email", { length: 256 }).notNull().unique(),
  password: varchar("password", { length: 60 }).notNull(),
  user_type: integer("user_type")
    .notNull()
    .references(() => userTypesTable.type_id),
});

export const categoriesTable = pgTable("categoriesTable", {
  category_id: serial("category_id").primaryKey(),
  category_name: varchar("category_name", { length: 100 }).notNull().unique(),
});

export const contactDetailsTable = pgTable("contact_details", {
  contact_details_id: serial("contact_details_id").primaryKey(),
  email: varchar("email", { length: 256 }),
  phone: varchar("phone", { length: 13 }),
  facebook: varchar("facebook", { length: 256 }),
  instagram: varchar("instagram", { length: 256 }),
  x: varchar("x", { length: 256 }),
  linkedin: varchar("linkedin", { length: 256 }),
});

export const businessesTable = pgTable("businesses", {
  business_id: serial("business_id").primaryKey(),
  name: varchar("name", { length: 256 }).notNull().unique(),
  description: varchar("description", { length: 1000 }).notNull(),
  address: varchar("address", { length: 256 }).notNull(),
  opening_time: time("opening_tine").notNull(),
  closing_time: time("closing_time").notNull(),
  isVerified: boolean("isVerified").notNull().default(false),
  account_created_on: timestamp("account_created_on").notNull().defaultNow(),
  category_id: integer("category_id")
    .notNull()
    .references(() => categoriesTable.category_id),
  owner_id: integer("owner_id")
    .notNull()
    .references(() => usersTable.user_id),
  contact_details_id: integer("contact_details_id")
    .notNull()
    .references(() => contactDetailsTable.contact_details_id),
});

export const reviewsTable = pgTable("reviews", {
  review_id: serial("review_id").primaryKey(),
  rating: integer("rating").notNull(),
  comment: varchar("comment", { length: 256 }),
  created_on: timestamp("created_on").notNull().defaultNow(),
  user_id: integer("user_id")
    .notNull()
    .references(() => usersTable.user_id),
  business_id: integer("business_id")
    .notNull()
    .references(() => businessesTable.business_id),
});

export const reportCategoriesTable = pgTable("report_categories", {
  report_category_id: serial("report_category_id").primaryKey(),
  report_category_name: varchar("report_category_name", { length: 100 })
    .notNull()
    .unique(),
});

export const reportsTable = pgTable("reviews", {
  report_id: serial("review_id").primaryKey(),
  reported_on: timestamp("reported_on").notNull().defaultNow(),
  user_id: integer("user_id")
    .notNull()
    .references(() => usersTable.user_id),
  review_id: integer("review_id")
    .notNull()
    .references(() => reviewsTable.review_id),
  report_category_id: integer("report_category_id")
    .notNull()
    .references(() => reportCategoriesTable.report_category_id),
});
