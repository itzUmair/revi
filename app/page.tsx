import { redirect } from "next/navigation";
import SignoutButton from "../components/SignoutButton";
import { getSession } from "@/lib/serverSession";

export default async function Home({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const redirectHint = searchParams?.from;
  const session = await getSession();

  if (redirectHint) {
    if (session?.user.user_type === 1) {
      redirect("/admin/dashboard");
    } else if (session?.user.user_type === 2) {
      redirect("/owner/dashboard");
    } else {
      redirect("/");
    }
  }

  return (
    <main>
      <p>{JSON.stringify(searchParams)}</p>
      <h1>Hello world!</h1>
      <SignoutButton />
    </main>
  );
}
