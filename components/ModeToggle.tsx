"use client";

import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

function getButtonContent(theme?: string, variant?: string) {
  if (theme === "dark") {
    return (
      <>
        {variant === "minimal" && <MoonIcon width={20} height={20} />}
        {variant !== "minimal" && (
          <>
            <MoonIcon />
            &nbsp;{variant !== "minimal" && "Dark Mode"}
          </>
        )}
      </>
    );
  } else {
    return (
      <>
        {variant === "minimal" && <SunIcon width={20} height={20} />}
        {variant !== "minimal" && (
          <>
            <SunIcon />
            &nbsp;Light Mode
          </>
        )}
      </>
    );
  }
}

function ModeToggle({ variant }: { variant?: "minimal" | "normal" }) {
  const { theme, setTheme } = useTheme();
  return (
    <button
      className={`flex items-center ${variant === "minimal" && "mr-2"}`}
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {getButtonContent(theme, variant)}
    </button>
  );
}

export default ModeToggle;
