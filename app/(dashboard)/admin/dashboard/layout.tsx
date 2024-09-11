import { Metadata } from "next";
import Sidebar from "./Sidebar";

export const metadata: Metadata = {
  title: "Dashboard | Revi",
  description: "Business review website",
};

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <div className="flex-1 px-4 bg-zinc-50 mt-4 rounded-md">{children}</div>
    </main>
  );
}

export default layout;
