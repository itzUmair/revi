import { getSession } from "@/lib/serverSession";
import { redirect } from "next/navigation";
import SignoutButton from "@/components/SignoutButton";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  if (session.user.user_type !== 1) {
    redirect("/");
  }

  return (
    <main className="px-4 md-px-16 lg:px-32">
      <h1>Welcome {session.user.email}</h1>
      <p>Your role: {session.user.user_type}</p>
      <SignoutButton />
    </main>
  );
}
