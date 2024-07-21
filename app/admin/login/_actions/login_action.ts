"use server";

import createConnection from "@/database";
import { admin } from "@/database/schema";
import { eq, and } from "drizzle-orm";

const loginAdmin = async (email: string, password: string) => {
  const { connection, db } = await createConnection();

  const result = await db
    .select()
    .from(admin)
    .where(and(eq(admin.email, email), eq(admin.password, password)));

  return result;
};

export default loginAdmin;
