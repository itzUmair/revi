import { getAllUsers } from "@/data-access";
import { columns } from "./columns";
import { UserTable } from "./user-table";
import DashboardHeader from "@/components/DashboardHeader";

async function page() {
  const users = await getAllUsers();
  return (
    <div>
      <DashboardHeader />
      <UserTable columns={columns} data={users} />
    </div>
  );
}

export default page;
