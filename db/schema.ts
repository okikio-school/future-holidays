import { sqliteTable, text, integer, primaryKey, index } from "drizzle-orm/sqlite-core";

// ISO 3166-2 Country Codes using 
export const COUNTRY_CODES = [
  'AF', 'AL', 'DZ', 'AS', 'AD', 'AO', 'AI', 'AQ', 'AG', 'AR', 'AM', 'AW', 'AU', 'AT', 'AZ',
  'BS', 'BH', 'BD', 'BB', 'BY', 'BE', 'BZ', 'BJ', 'BM', 'BT', 'BO', 'BQ', 'BA', 'BW', 'BV', 
  'BR', 'IO', 'BN', 'BG', 'BF', 'BI', 'CV', 'KH', 'CM', 'CA', 'KY', 'CF', 'TD', 'CL', 'CN', 
  'CX', 'CC', 'CO', 'KM', 'CG', 'CD', 'CK', 'CR', 'CI', 'HR', 'CU', 'CW', 'CY', 'CZ', 'DK', 
  'DJ', 'DM', 'DO', 'EC', 'EG', 'SV', 'GQ', 'ER', 'EE', 'SZ', 'ET', 'FK', 'FO', 'FJ', 'FI', 
  'FR', 'GF', 'PF', 'TF', 'GA', 'GM', 'GE', 'DE', 'GH', 'GI', 'GR', 'GL', 'GD', 'GP', 'GU', 
  'GT', 'GG', 'GN', 'GW', 'GY', 'HT', 'HM', 'VA', 'HN', 'HK', 'HU', 'IS', 'IN', 'ID', 'IR', 
  'IQ', 'IE', 'IM', 'IL', 'IT', 'JM', 'JP', 'JE', 'JO', 'KZ', 'KE', 'KI', 'KP', 'KR', 'KW', 
  'KG', 'LA', 'LV', 'LB', 'LS', 'LR', 'LY', 'LI', 'LT', 'LU', 'MO', 'MG', 'MW', 'MY', 'MV', 
  'ML', 'MT', 'MH', 'MQ', 'MR', 'MU', 'YT', 'MX', 'FM', 'MD', 'MC', 'MN', 'ME', 'MS', 'MA', 
  'MZ', 'MM', 'NA', 'NR', 'NP', 'NL', 'NC', 'NZ', 'NI', 'NE', 'NG', 'NU', 'NF', 'MK', 'MP', 
  'NO', 'OM', 'PK', 'PW', 'PS', 'PA', 'PG', 'PY', 'PE', 'PH', 'PN', 'PL', 'PT', 'PR', 'QA', 
  'RE', 'RO', 'RU', 'RW', 'BL', 'SH', 'KN', 'LC', 'MF', 'PM', 'VC', 'WS', 'SM', 'ST', 'SA', 
  'SN', 'RS', 'SC', 'SL', 'SG', 'SX', 'SK', 'SI', 'SB', 'SO', 'ZA', 'GS', 'SS', 'ES', 'LK', 
  'SD', 'SR', 'SJ', 'SE', 'CH', 'SY', 'TW', 'TJ', 'TZ', 'TH', 'TL', 'TG', 'TK', 'TO', 'TT', 
  'TN', 'TR', 'TM', 'TC', 'TV', 'UG', 'UA', 'AE', 'GB', 'US', 'UM', 'UY', 'UZ', 'VU', 'VE', 
  'VN', 'VG', 'VI', 'WF', 'EH', 'YE', 'ZM', 'ZW'
] as const;

// ISO-3166-2 Country Subdivision Codes
export const SUBDIVISION_CODES = [
  // United States
  'US-AL', 'US-AK', 'US-AZ', 'US-AR', 'US-CA', 'US-CO', 'US-CT', 'US-DE', 'US-FL', 'US-GA', 
  'US-HI', 'US-ID', 'US-IL', 'US-IN', 'US-IA', 'US-KS', 'US-KY', 'US-LA', 'US-ME', 'US-MD', 
  'US-MA', 'US-MI', 'US-MN', 'US-MS', 'US-MO', 'US-MT', 'US-NE', 'US-NV', 'US-NH', 'US-NJ', 
  'US-NM', 'US-NY', 'US-NC', 'US-ND', 'US-OH', 'US-OK', 'US-OR', 'US-PA', 'US-RI', 'US-SC', 
  'US-SD', 'US-TN', 'US-TX', 'US-UT', 'US-VT', 'US-VA', 'US-WA', 'US-WV', 'US-WI', 'US-WY',

  // United Kingdom (Great Britain and Northern Ireland)
  'GB-ENG', 'GB-NIR', 'GB-SCT', 'GB-WLS', // England, Northern Ireland, Scotland, Wales

  // Canada
  'CA-AB', 'CA-BC', 'CA-MB', 'CA-NB', 'CA-NL', 'CA-NS', 'CA-NT', 'CA-NU', 'CA-ON', 'CA-PE', 
  'CA-QC', 'CA-SK', 'CA-YT',

  // Australia
  'AU-ACT', 'AU-NSW', 'AU-NT', 'AU-QLD', 'AU-SA', 'AU-TAS', 'AU-VIC', 'AU-WA',

  // New Zealand
  'NZ-AUK', 'NZ-BOP', 'NZ-CAN', 'NZ-GIS', 'NZ-HKB', 'NZ-MBH', 'NZ-MWT', 'NZ-NSN', 'NZ-OTA', 
  'NZ-STL', 'NZ-TAS', 'NZ-TKI', 'NZ-WGN', 'NZ-WKO', 'NZ-WTC'
] as const;

// Table definitions
export const holidays = sqliteTable("holidays", {
  holidayId: integer("holiday_id").unique().primaryKey({ autoIncrement: true }),
  name: text("name").notNull(),

  localName: text("local_name").notNull(),
  countryCode: text("country_code", { enum: COUNTRY_CODES }).notNull(),

  date: integer("date", { mode: "timestamp_ms" }),
  
  fixed: integer('fixed', { mode: 'boolean' }).notNull(),
  global: integer('global', { mode: 'boolean' }).notNull(),
  
  launchYear: integer("launch_year").notNull(),
}, (table) => {
  return {
    holidayDateCountryCodeIdx: index("holiday_date_country_code_idx").on(table.date, table.countryCode),
  };
});

export const holidayTypes = sqliteTable("holiday_types", {
  holidayId: integer("holiday_id").references(() => holidays.holidayId).notNull(),
  type: text("type", {
    enum: ["Public", "Bank", "School", "Authorities", "Optional", "Observance"],
  }),
}, (table) => {
  return {
    pk: primaryKey(table.holidayId, table.type),
    holidayTypeIdx: index("holiday_type_idx").on(table.type),
  };
});

export const provinceHolidays = sqliteTable("province_holidays", {
  holidayId: integer("holiday_id").references(() => holidays.holidayId).notNull(),
  province: text("province", { enum: SUBDIVISION_CODES }),
}, (table) => {
  return {
    pk: primaryKey(table.holidayId, table.province),
    provinceHolidaysIdx: index("province_holidays_idx").on(table.province),
  };
});
