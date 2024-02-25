import AdminFooter from "@/components/AdminFooter";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin | Revi",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-1">{children}</div>
      <AdminFooter />
    </div>
  );
}
