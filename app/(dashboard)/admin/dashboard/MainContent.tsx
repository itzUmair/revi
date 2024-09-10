"use client";

import { useContext } from "react";
import { AdminViewContext } from "@/context/AdminViewContext";
import { Separator } from "@/components/ui/separator";
import Users from "./_views/users/Users";

function MainContent() {
  const { currentView } = useContext(AdminViewContext);
  return (
    <div className="mt-4 bg-white rounded-md flex-1">
      <section className="px-8 mb-1">
        <h1 className="font-bold">Admin Dashboard</h1>
        <p className="text-xs text-gray-500">{new Date().toDateString()}</p>
      </section>
      <Separator />
      <section className="relative">
        {currentView === "users" && <Users />}
      </section>
    </div>
  );
}

export default MainContent;
