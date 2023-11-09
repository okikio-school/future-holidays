import { drizzle } from 'drizzle-orm/better-sqlite3';
import Database from 'better-sqlite3';
import * as schema from './schema.ts';

const sqlite_db = import.meta.resolve('./sqlite.db');
export const sqlite = new Database(new URL(sqlite_db).pathname);
export const db = drizzle(sqlite, { schema, logger: true });