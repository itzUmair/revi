import { getSession } from "@/lib/serverSession";
import { LoginForm } from "./LoginPage";
import { redirect } from "next/navigation";
import Image from "next/image";

export default async function SignInPage() {
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
      <LoginForm />;
    </main>
  );
}
