CREATE TABLE IF NOT EXISTS "businesses" (
	"business_id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"description" varchar(1000) NOT NULL,
	"address" varchar(256) NOT NULL,
	"opening_tine" time NOT NULL,
	"closing_time" time NOT NULL,
	"isVerified" boolean DEFAULT false NOT NULL,
	"account_created_on" timestamp DEFAULT now() NOT NULL,
	"category_id" integer NOT NULL,
	"owner_id" integer NOT NULL,
	"contact_details_id" integer NOT NULL,
	CONSTRAINT "businesses_name_unique" UNIQUE("name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "business_categories" (
	"category_id" serial PRIMARY KEY NOT NULL,
	"category_name" varchar(100) NOT NULL,
	CONSTRAINT "business_categories_category_name_unique" UNIQUE("category_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "contact_details" (
	"contact_details_id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256),
	"phone" varchar(13),
	"facebook" varchar(256),
	"instagram" varchar(256),
	"x" varchar(256),
	"linkedin" varchar(256)
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "report_categories" (
	"report_category_id" serial PRIMARY KEY NOT NULL,
	"report_category_name" varchar(100) NOT NULL,
	CONSTRAINT "report_categories_report_category_name_unique" UNIQUE("report_category_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reports" (
	"review_id" integer NOT NULL,
	"reported_on" timestamp DEFAULT now() NOT NULL,
	"user_id" integer NOT NULL,
	"report_category_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "reviews" (
	"review_id" serial PRIMARY KEY NOT NULL,
	"rating" integer NOT NULL,
	"comment" varchar(256),
	"created_on" timestamp DEFAULT now() NOT NULL,
	"user_id" integer NOT NULL,
	"business_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "user_types" (
	"type_id" serial PRIMARY KEY NOT NULL,
	"type_name" varchar(100) NOT NULL,
	CONSTRAINT "user_types_type_name_unique" UNIQUE("type_name")
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "users" (
	"user_id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"password" varchar(60) NOT NULL,
	"user_type" integer NOT NULL,
	CONSTRAINT "users_email_unique" UNIQUE("email")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "businesses" ADD CONSTRAINT "businesses_category_id_business_categories_category_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."business_categories"("category_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "businesses" ADD CONSTRAINT "businesses_owner_id_users_user_id_fk" FOREIGN KEY ("owner_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "businesses" ADD CONSTRAINT "businesses_contact_details_id_contact_details_contact_details_id_fk" FOREIGN KEY ("contact_details_id") REFERENCES "public"."contact_details"("contact_details_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reports" ADD CONSTRAINT "reports_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reports" ADD CONSTRAINT "reports_review_id_reviews_review_id_fk" FOREIGN KEY ("review_id") REFERENCES "public"."reviews"("review_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reports" ADD CONSTRAINT "reports_report_category_id_report_categories_report_category_id_fk" FOREIGN KEY ("report_category_id") REFERENCES "public"."report_categories"("report_category_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_user_id_users_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."users"("user_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "reviews" ADD CONSTRAINT "reviews_business_id_businesses_business_id_fk" FOREIGN KEY ("business_id") REFERENCES "public"."businesses"("business_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_user_type_user_types_type_id_fk" FOREIGN KEY ("user_type") REFERENCES "public"."user_types"("type_id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
