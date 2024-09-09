import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Revi",
  description: "Business review website",
};

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <main>{children}</main>;
}

export default layout;
