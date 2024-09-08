import { redirect } from "next/navigation";
import SignoutButton from "../components/SignoutButton";
import { getSession } from "@/lib/serverSession";

export default async function Home() {
  const session = await getSession();

  if (session?.user.user_type === 1) {
    redirect("/admin/dashboard");
  }
  if (session?.user.user_type === 2) {
    redirect("/owner/dashboard");
  }

  return (
    <main>
      <h1>Hello world!</h1>
      <SignoutButton />
    </main>
  );
}
