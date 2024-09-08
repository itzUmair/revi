import { getSession } from "@/lib/serverSession";
import { redirect } from "next/navigation";
import SignoutButton from "./SignoutButton";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  return (
    <div>
      <h1>Welcome {session.user.email}</h1>
      <p>Your role: {session.user.user_type}</p>
      <SignoutButton />
    </div>
  );
}
