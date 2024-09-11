import DashboardHeader from "@/components/DashboardHeader";
import ModeToggle from "@/components/ModeToggle";
import { getUserByEmail } from "@/data-access";
import { getSession } from "@/lib/serverSession";
import { ChevronDown } from "lucide-react";
import { redirect } from "next/navigation";
import ProfileSettingsForm from "./ProfileSettingsForm";

async function page() {
  const session = await getSession();
  if (!session || session.user.user_type !== 1) redirect("/");

  const user = await getUserByEmail(session.user.email);

  return (
    <section>
      <DashboardHeader />
      <div className="mt-8 w-1/4">
        <ul>
          <li className="flex justify-between">
            Appearance:
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
