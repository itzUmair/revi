import { getUserByEmail } from "@/data-access";
import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import { validEnvVariables } from "@/validatedEnv";

type Credentials = {
  email: string;
  password: string;
};

type User = {
  user_id: string;
  email: string;
  user_type: string;
};

const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials): Promise<any> {
        const { email, password } = credentials as Credentials;
        const user = await getUserByEmail(email);
        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (isPasswordCorrect) return user;
        throw new Error("Invalid email or password");
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  session: {
    strategy: "jwt",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        const { user_id, email, user_type } = user as User;
        token.user_id = user_id;
        token.email = email;
        token.user_type = user_type;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.user_id = token.user_id as number;
        session.user.email = token.email as string;
        session.user.user_type = token.user_type as string;
      }
      return session;
    },
  },
  secret: validEnvVariables.NEXTAUTH_SECRET,
};

export default authOptions;
