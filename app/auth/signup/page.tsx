import { getSession } from "@/lib/serverSession";
import { redirect } from "next/navigation";
import { SignupForm } from "./SignupPage";
import Image from "next/image";

export default async function page() {
  const session = await getSession();

  if (session) {
    redirect("/");
  }

  return (
    <main>
      <Image
        src="/revi-logo.png"
        alt="revi logo"
        width={150}
        height={150}
        className="mx-auto"
      />
      <SignupForm />
    </main>
  );
}
