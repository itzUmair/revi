"use client";

import { createContext, ReactNode, useState } from "react";

type AdminViewContext = {
  currentView: string;
  changeCurrentView: (newView: string) => void;
};

export const AdminViewContext = createContext({
  currentView: "dashboard",
  changeCurrentView: (newView: string) => {},
});

const AdminViewProvider = ({ children }: { children: ReactNode }) => {
  const [currentView, setCurrentView] = useState<string>("dashboard");

  const changeCurrentView = (newView: string) => {
    setCurrentView(newView);
  };

  return (
    <AdminViewContext.Provider value={{ currentView, changeCurrentView }}>
      {children}
    </AdminViewContext.Provider>
  );
};

export default AdminViewProvider;
