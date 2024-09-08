import { getSession } from "@/lib/serverSession";
import { redirect } from "next/navigation";
import { SignupForm } from "./SignupPage";

export default async function page() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return <SignupForm />;
}
