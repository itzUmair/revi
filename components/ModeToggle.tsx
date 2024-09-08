"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

function getButtonContent(theme?: string) {
  if (theme === "dark") {
    return (
      <>
        <MoonIcon />
        &nbsp;Dark Mode
      </>
    );
  } else {
    return (
      <>
        <SunIcon />
        &nbsp;Light Mode
      </>
    );
  }
}

function ModeToggle() {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className="flex items-center"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {getButtonContent(theme)}
    </button>
  );
}

export default ModeToggle;
