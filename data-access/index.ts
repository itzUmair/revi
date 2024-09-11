"use server";

import createConnection from "@/database";
import { usersTable, userTypesTable } from "@/database/schema";
import { User, UserRaw } from "@/types/types";
import { eq } from "drizzle-orm";

export async function getUserByEmail(email: string): Promise<UserRaw> {
  const { queryClient, db } = createConnection();
  const [user] = await db
    .select()
    .from(usersTable)
    .where(eq(usersTable.email, email));
  if (!user) {
    await queryClient.end();
    throw new Error("Invalid email or password");
  }
  await queryClient.end();
  return user;
}

export async function getAllUsers(): Promise<User[]> {
  const { queryClient, db } = createConnection();
  const users = await db
    .select({
      user_id: usersTable.user_id,
      first_name: usersTable.first_name,
      last_name: usersTable.last_name,
      user_type: userTypesTable.type_name,
      email: usersTable.email,
    })
    .from(usersTable)
    .innerJoin(
      userTypesTable,
      eq(userTypesTable.type_id, usersTable.user_type)
    );

  await queryClient.end();

  return users;
}
