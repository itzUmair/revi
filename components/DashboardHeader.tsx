"use client";

import { usePathname } from "next/navigation";

function DashboardHeader() {
  const pathname = usePathname();

  return (
    <div className="border-b border-gray-200 dark:border-gray-800 py-1">
      <h1 className="font-bold">{pathname.split("/").pop()?.toUpperCase()}</h1>
      <p className="text-xs text-gray-400">{new Date().toDateString()}</p>
    </div>
  );
}

export default DashboardHeader;
