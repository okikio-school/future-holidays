import { db } from "@/db/db.ts";
import { sql } from "drizzle-orm";

export function GET(request: Request) {
  const len = db.query.holidays.findMany({
    
  })
}