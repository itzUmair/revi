import { redirect } from "next/navigation";
import SignoutButton from "../components/SignoutButton";
import { getSession } from "@/lib/serverSession";
import Navbar from "@/components/Navbar";

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
      <Navbar />
      <div className="h-16">{/* this is just a black space */}</div>
      <h1>Hello world!</h1>
      <SignoutButton />
    </main>
  );
}
