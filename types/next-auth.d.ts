import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    user_id: string;
    email: string;
    user_type: string;
  }

  interface Session {
    user: {
      user_id: number;
      email: string;
      user_type: string;
    };
  }

  interface JWT {
    user_id: number;
    email: string;
    user_type: string;
  }
}
