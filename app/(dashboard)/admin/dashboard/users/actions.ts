"use server";

import createConnection from "@/database";
import { usersTable } from "@/database/schema";
import bcrypt from "bcryptjs";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function createNewUser(data: {
  first_name: string;
  last_name?: string | undefined;
  email: string;
  password: string;
  user_type: string;
}) {
  let client;
  try {
    const { queryClient, db } = createConnection();
    client = queryClient;
    const hashedPassword = await bcrypt.hash(data.password, 10);
    await db.insert(usersTable).values({
      ...data,
      password: hashedPassword,
      user_type: parseInt(data.user_type),
    });
    revalidatePath("/admin/dashboard");
    return {
      status: "success",
      message: "Account created successfully!",
    };
  } catch (error: any) {
    if (error.code === "23505") {
      return {
        success: false,
        message: "Email already exists. Please use a different email.",
      };
    }
    return {
      success: false,
      message: "An error occurred while adding the user.",
    };
  } finally {
    await client?.end();
  }
}

export async function deleteUser(userid: number) {
  let client;
  try {
    const { queryClient, db } = createConnection();
    client = queryClient;
    await db.delete(usersTable).where(eq(usersTable.user_id, userid));
    revalidatePath("/admin/dashboard");
    return {
      status: "success",
      message: "User deleted successfully!",
    };
  } catch (error: any) {
    return {
      success: false,
      message: "An error occurred while deleting the user.",
    };
  } finally {
    await client?.end();
  }
}
