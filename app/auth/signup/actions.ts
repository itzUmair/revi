"use server";

import createConnection from "@/database";
import { usersTable } from "@/database/schema";
import bcrypt from "bcryptjs";

export async function signup(data: {
  first_name: string;
  last_name?: string | undefined;
  email: string;
  password: string;
}) {
  try {
    const db = createConnection();
    const hashedPassword = await bcrypt.hash(data.password, 10);
    await db
      .insert(usersTable)
      .values({ ...data, password: hashedPassword, user_type: 3 });
    return {
      status: "success",
      message: "Account created successfully! Try logging in",
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
  }
}
