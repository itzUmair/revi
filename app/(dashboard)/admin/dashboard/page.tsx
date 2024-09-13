import DashboardHeader from "@/components/DashboardHeader";
import { getSession } from "@/lib/serverSession";
import { redirect } from "next/navigation";

async function page() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  if (session.user.user_type !== 1) {
    redirect("/");
  }

  return (
    <section>
      <DashboardHeader />
      Dashboard
    </section>
  );
}

export default page;
