import { getAllUsers } from "@/data-access";
import { columns } from "./columns";
import { UserTable } from "./user-table";
import DashboardHeader from "@/components/DashboardHeader";
import { getSession } from "@/lib/serverSession";
import { redirect } from "next/navigation";

async function page() {
  const session = await getSession();

  if (!session || session.user.user_type !== 1) redirect("/");

  const users = await getAllUsers();
  return (
    <div>
      <DashboardHeader />
      <UserTable columns={columns} data={users} />
    </div>
  );
}

export default page;
