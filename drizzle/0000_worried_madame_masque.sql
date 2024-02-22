CREATE TABLE `admin` (
	`adminid` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `admin_adminid` PRIMARY KEY(`adminid`)
);
--> statement-breakpoint
CREATE TABLE `business` (
	`businessid` int AUTO_INCREMENT NOT NULL,
	`ownerid` int NOT NULL,
	`name` varchar(100) NOT NULL,
	`city` varchar(100) NOT NULL,
	`country` varchar(100) NOT NULL,
	`address` varchar(255) NOT NULL,
	`email` varchar(255) NOT NULL,
	`rating` decimal NOT NULL,
	`phone` varchar(13) NOT NULL,
	`website` varchar(255),
	`description` varchar(1000) NOT NULL,
	`isverified` boolean DEFAULT false,
	CONSTRAINT `business_businessid` PRIMARY KEY(`businessid`)
);
--> statement-breakpoint
CREATE TABLE `logs` (
	`logid` int AUTO_INCREMENT NOT NULL,
	`adminid` int NOT NULL,
	`logmessage` varchar(255) NOT NULL,
	`timestamp` timestamp NOT NULL DEFAULT (now()),
	CONSTRAINT `logs_logid` PRIMARY KEY(`logid`)
);
--> statement-breakpoint
CREATE TABLE `owner` (
	`ownerid` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	`phone` varchar(13) NOT NULL,
	CONSTRAINT `owner_ownerid` PRIMARY KEY(`ownerid`)
);
--> statement-breakpoint
CREATE TABLE `report` (
	`reportid` int AUTO_INCREMENT NOT NULL,
	`userid` int NOT NULL,
	`reviewid` int,
	`timestamp` timestamp NOT NULL DEFAULT (now()),
	`reportcategory` int NOT NULL,
	`reportmessage` varchar(300),
	`reportpriority` int NOT NULL,
	CONSTRAINT `report_reportid` PRIMARY KEY(`reportid`)
);
--> statement-breakpoint
CREATE TABLE `reportcategory` (
	`categoryid` int AUTO_INCREMENT NOT NULL,
	`categoryname` varchar(50) NOT NULL,
	CONSTRAINT `reportcategory_categoryid` PRIMARY KEY(`categoryid`)
);
--> statement-breakpoint
CREATE TABLE `review` (
	`reviewid` int AUTO_INCREMENT NOT NULL,
	`businessid` int,
	`userid` int,
	`timestamp` timestamp NOT NULL DEFAULT (now()),
	`rating` decimal NOT NULL,
	`upvote` int DEFAULT 0,
	`comment` varchar(300),
	CONSTRAINT `review_reviewid` PRIMARY KEY(`reviewid`)
);
--> statement-breakpoint
CREATE TABLE `socials` (
	`socialid` int AUTO_INCREMENT NOT NULL,
	`businessid` int NOT NULL,
	`socialname` varchar(50) NOT NULL,
	`sociallink` varchar(255) NOT NULL,
	CONSTRAINT `socials_socialid` PRIMARY KEY(`socialid`)
);
--> statement-breakpoint
CREATE TABLE `user` (
	`userid` int AUTO_INCREMENT NOT NULL,
	`email` varchar(255) NOT NULL,
	`password` varchar(255) NOT NULL,
	CONSTRAINT `user_userid` PRIMARY KEY(`userid`)
);
--> statement-breakpoint
ALTER TABLE `business` ADD CONSTRAINT `business_ownerid_owner_ownerid_fk` FOREIGN KEY (`ownerid`) REFERENCES `owner`(`ownerid`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `logs` ADD CONSTRAINT `logs_adminid_admin_adminid_fk` FOREIGN KEY (`adminid`) REFERENCES `admin`(`adminid`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `report` ADD CONSTRAINT `report_userid_user_userid_fk` FOREIGN KEY (`userid`) REFERENCES `user`(`userid`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `report` ADD CONSTRAINT `report_reviewid_review_reviewid_fk` FOREIGN KEY (`reviewid`) REFERENCES `review`(`reviewid`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `report` ADD CONSTRAINT `report_reportcategory_reportcategory_categoryid_fk` FOREIGN KEY (`reportcategory`) REFERENCES `reportcategory`(`categoryid`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `review` ADD CONSTRAINT `review_businessid_business_businessid_fk` FOREIGN KEY (`businessid`) REFERENCES `business`(`businessid`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `review` ADD CONSTRAINT `review_userid_user_userid_fk` FOREIGN KEY (`userid`) REFERENCES `user`(`userid`) ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE `socials` ADD CONSTRAINT `socials_businessid_business_businessid_fk` FOREIGN KEY (`businessid`) REFERENCES `business`(`businessid`) ON DELETE no action ON UPDATE no action;