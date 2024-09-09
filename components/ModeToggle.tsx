"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { DesktopIcon, MoonIcon, SunIcon } from "@radix-ui/react-icons";

const ModeToggle = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const selected =
    theme === "light" ? (
      <>
        <SunIcon width={20} height={20} />
        &nbsp;Light
      </>
    ) : theme === "dark" ? (
      <>
        <MoonIcon width={20} height={20} />
        &nbsp;Dark
      </>
    ) : (
      <>
        <DesktopIcon />
        &nbsp;System
      </>
    );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center">
        {selected}
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-zinc-200 dark:bg-slate-950 z-50 p-2 w-full">
        <DropdownMenuItem
          onClick={() => setTheme("system")}
          className="flex items-center mb-2"
        >
          <DesktopIcon />
          &nbsp;System
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("light")}
          className="flex items-center mb-2"
        >
          <SunIcon />
          &nbsp;Light
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme("dark")}
          className="flex items-center mb-2"
        >
          <MoonIcon />
          &nbsp;Dark
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ModeToggle;
