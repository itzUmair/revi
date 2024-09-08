import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    user_id: number;
    email: string;
    user_type: number;
  }

  interface Session {
    user: {
      user_id: number;
      email: string;
      user_type: number;
    };
  }

  interface JWT {
    user_id: number;
    email: string;
    user_type: number;
  }
}
