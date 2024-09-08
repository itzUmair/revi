import { getSession } from "@/lib/serverSession";
import { LoginForm } from "./LoginPage";
import { redirect } from "next/navigation";

export default async function SignInPage() {
  const session = await getSession();

  if (session) {
    redirect("/dashboard");
  }

  return <LoginForm />;
}
