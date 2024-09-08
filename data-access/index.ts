import createConnection from "@/database";
import { usersTable } from "@/database/schema";
import { eq } from "drizzle-orm";

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
