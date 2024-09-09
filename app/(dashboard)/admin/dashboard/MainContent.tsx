"use client";

import { useContext } from "react";
import { AdminViewContext } from "@/context/AdminViewContext";

function MainContent() {
  const { currentView } = useContext(AdminViewContext);
  return <div className="mt-8 bg-white rounded-md flex-1">{currentView}</div>;
}

export default MainContent;
