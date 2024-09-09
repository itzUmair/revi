import { getSession } from "@/lib/serverSession";
import { redirect } from "next/navigation";
import Sidebar from "./Sidebar";
import AdminViewProvider from "@/context/AdminViewContext";
import MainContent from "./MainContent";

export default async function DashboardPage() {
  const session = await getSession();

  if (!session) {
    redirect("/auth/login");
  }

  if (session.user.user_type !== 1) {
    redirect("/");
  }

  return (
    <main className="px-4 h-screen flex">
      <AdminViewProvider>
        <Sidebar session={session} />
        <MainContent />
      </AdminViewProvider>
    </main>
  );
}
