"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  BackpackIcon,
  ExitIcon,
  GearIcon,
  HamburgerMenuIcon,
  MagnifyingGlassIcon,
  PersonIcon,
  ReaderIcon,
} from "@radix-ui/react-icons";
import { Separator } from "./ui/separator";
import ModeToggle from "./ModeToggle";
import { useEffect, useState } from "react";

function MobileNavbar({
  isOnAuthPage,
  status,
}: {
  isOnAuthPage: boolean;
  status: "authenticated" | "unauthenticated" | "loading";
}) {
  return (
    <nav className="flex justify-between items-center px-4 bg-zinc-200/50 dark:bg-slate-950/50 backdrop-blur-sm py-1 fixed w-full top-0">
      <Link href={"/"} className="flex font-bold items-center">
        <Image src="/revi-logo.png" alt="revi logo" width={60} height={60} />
        Revi
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <HamburgerMenuIcon width={25} height={25} />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="bg-zinc-200/50 dark:bg-slate-950/50 backdrop-blur-sm py-1">
          <DropdownMenuLabel>Menu</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <Link href={"settings"} className="flex items-center">
              <MagnifyingGlassIcon />
              &nbsp;Search
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"settings"} className="flex items-center">
              <BackpackIcon />
              &nbsp;Register
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href={"settings"} className="flex items-center">
              <ReaderIcon />
              &nbsp;About us
            </Link>
          </DropdownMenuItem>
          {status === "authenticated" && (
            <DropdownMenuItem>
              <Link href={"settings"} className="flex items-center">
                <GearIcon />
                &nbsp;Settings
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>
            <ModeToggle />
          </DropdownMenuItem>
          {!isOnAuthPage && status !== "authenticated" && (
            <>
              <DropdownMenuItem>
                <Link
                  href={"/auth/login"}
                  className="border-2 border-brand-color px-2 py-1 rounded-md w-full text-center"
                >
                  Login
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link
                  href={"/auth/signup"}
                  className="border-2 border-brand-color bg-brand-color text-white px-2 py-1 rounded-md w-full text-center"
                >
                  Signup
                </Link>
              </DropdownMenuItem>
            </>
          )}

          <Separator />
          {status === "authenticated" && (
            <DropdownMenuItem>
              <button className="flex items-center" onClick={() => signOut()}>
                <ExitIcon className="rotate-180" />
                &nbsp;Log out
              </button>
            </DropdownMenuItem>
          )}
        </DropdownMenuContent>
      </DropdownMenu>
    </nav>
  );
}

function DesktopNavbar({
  isOnAuthPage,
  status,
}: {
  isOnAuthPage: boolean;
  status: "authenticated" | "unauthenticated" | "loading";
}) {
  return (
    <nav className="flex justify-between items-center px-4 md:px-16 lg:px-32 bg-zinc-200/50 dark:bg-slate-950/50 backdrop-blur-sm py-1 w-full fixed top-0">
      <Link href={"/"} className="flex font-bold items-center">
        <Image src="/revi-logo.png" alt="revi logo" width={60} height={60} />
        Revi
      </Link>
      <ul className="flex items-center gap-x-3">
        <li>
          <Link href={"/search"} className="hover:underline">
            Search
          </Link>
        </li>
        <li>
          <Link href={"/register"} className="hover:underline">
            Register
          </Link>
        </li>
        <li>
          <Link href={"/about-us"} className="hover:underline">
            About us
          </Link>
        </li>
      </ul>

      {!isOnAuthPage && status !== "authenticated" && (
        <ul className="flex items-center gap-x-2">
          <li>
            <ModeToggle variant="minimal" />
          </li>
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

function Navbar() {
  const [currentWidth, setCurrentWidth] = useState<number>(1024);
  const pathname = usePathname();
  const { status } = useSession();

  const isOnAuthPage = pathname.includes("/auth");

  useEffect(() => {
    function handleResize() {
      setCurrentWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  });

  if (currentWidth < 768) {
    return <MobileNavbar isOnAuthPage={isOnAuthPage} status={status} />;
  } else {
    return <DesktopNavbar isOnAuthPage={isOnAuthPage} status={status} />;
  }
}

export default Navbar;
