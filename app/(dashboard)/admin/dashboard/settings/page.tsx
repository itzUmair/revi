import DashboardHeader from "@/components/DashboardHeader";
import ModeToggle from "@/components/ModeToggle";
import { getSession } from "@/lib/serverSession";
import { ChevronDown } from "lucide-react";
import { redirect } from "next/navigation";

async function page() {
  const session = await getSession();
  if (!session || session.user.user_type !== 1) redirect("/");

  return (
    <section>
      <DashboardHeader />
      <div className="flex mt-8">
        <ul className="w-1/6">
          <li>Appearance:</li>
        </ul>
        <ul className="w-full">
          <li>
            <span className="flex items-center gap-x-1">
              <ModeToggle />
              <ChevronDown />
            </span>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default page;
