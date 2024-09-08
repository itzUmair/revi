"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "./ui/button";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ExitIcon, GearIcon, PersonIcon } from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";
import ModeToggle from "./ModeToggle";

function Navbar() {
  const pathname = usePathname();
  const { data, status } = useSession();

  const isOnAuthPage = pathname.includes("/auth");

  return (
    <nav className="flex justify-between items-center px-4 md:px-32">
      <Link href={"/"} className="flex font-bold items-center">
        <Image src="/revi-logo.png" alt="revi logo" width={60} height={60} />
        Revi
      </Link>
      <ul className="flex items-center gap-x-2">
        <li>Search</li>
        <li>Register</li>
        <li>About us</li>
      </ul>
      {!isOnAuthPage && status !== "authenticated" && (
        <ul className="flex items-center gap-x-2">
          <li>
            <Link
              href={"/auth/login"}
              className="border-2 border-brand-color px-2 py-1 rounded-md"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href={"/auth/signup"}
              className="border-2 border-brand-color bg-brand-color text-white px-2 py-1 rounded-md"
            >
              Signup
            </Link>
          </li>
        </ul>
      )}
      {status === "authenticated" && (
        <DropdownMenu>
          <DropdownMenuTrigger className="bg-brand-color hover:bg-brand-color-focus px-2 py-1 rounded-full text-white w-8 h-8">
            <PersonIcon width={20} height={20} />
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <Link href={"settings"} className="flex items-center">
                <GearIcon />
                &nbsp;Settings
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <ModeToggle />
            </DropdownMenuItem>
            <Separator />
            <DropdownMenuItem>
              <button className="flex items-center" onClick={() => signOut()}>
                <ExitIcon className="rotate-180" />
                &nbsp;Log out
              </button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </nav>
  );
}

export default Navbar;
