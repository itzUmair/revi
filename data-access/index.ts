"use server";

import createConnection from "@/database";
import { usersTable, userTypesTable } from "@/database/schema";
import { eq, not } from "drizzle-orm";

export async function getUserByEmail(email: string) {
  const db = createConnection();
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));
  if (!user) {
    throw new Error("Invalid email or password");
  }
  return user;
}

export async function getAllUsers() {
  const db = createConnection();
  const users = await db
    .select({
      user_id: usersTable.user_id,
      first_name: usersTable.first_name,
      last_name: usersTable.last_name,
      type: userTypesTable.type_name,
      email: usersTable.email,
    })
    .from(usersTable)
    .innerJoin(
      userTypesTable,
      eq(userTypesTable.type_id, usersTable.user_type)
    );
  return users;
}
