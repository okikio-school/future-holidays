CREATE TABLE `holiday_types` (
	`holiday_id` integer NOT NULL,
	`type` text,
	PRIMARY KEY(`holiday_id`, `type`),
	FOREIGN KEY (`holiday_id`) REFERENCES `holidays`(`holiday_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE TABLE `holidays` (
	`holiday_id` integer PRIMARY KEY AUTOINCREMENT NOT NULL,
	`name` text NOT NULL,
	`local_name` text NOT NULL,
	`country_code` text NOT NULL,
	`date` integer,
	`fixed` integer NOT NULL,
	`global` integer NOT NULL,
	`launch_year` integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE `province_holidays` (
	`holiday_id` integer NOT NULL,
	`province` text,
	PRIMARY KEY(`holiday_id`, `province`),
	FOREIGN KEY (`holiday_id`) REFERENCES `holidays`(`holiday_id`) ON UPDATE no action ON DELETE no action
);
--> statement-breakpoint
CREATE INDEX `holiday_type_idx` ON `holiday_types` (`type`);--> statement-breakpoint
CREATE UNIQUE INDEX `holidays_holiday_id_unique` ON `holidays` (`holiday_id`);--> statement-breakpoint
CREATE INDEX `holiday_date_country_code_idx` ON `holidays` (`date`,`country_code`);--> statement-breakpoint
CREATE INDEX `province_holidays_idx` ON `province_holidays` (`province`);