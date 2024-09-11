import { getSession } from "next-auth/react";
import { redirect } from "next/navigation";

async function page() {
  const session = await getSession();

  if (!session || session.user.user_type !== 1) redirect("/");

  return <div>page</div>;
}

export default page;
