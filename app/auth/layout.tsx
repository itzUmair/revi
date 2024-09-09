import Navbar from "@/components/Navbar";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <div className="h-16">{/* this is just a black space */}</div>
      {children}
    </>
  );
}

export default layout;
