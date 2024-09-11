"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  BackpackIcon,
  ChatBubbleIcon,
  ClipboardIcon,
  ExitIcon,
  GearIcon,
  HomeIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { LoaderCircleIcon } from "lucide-react";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";

type Links = {
  name: string;
  icon: any;
  path: string;
};

function Sidebar() {
  const pathname = usePathname();
  const { data: session, status } = useSession();
  const currentView = pathname.split("/").pop();

  const links: Links[] = [
    {
      name: "Dashboard",
      icon: <HomeIcon width={20} height={20} />,
      path: "/admin/dashboard",
    },
    {
      name: "Users",
      icon: <PersonIcon width={20} height={20} />,
      path: "/admin/dashboard/users",
    },
    {
      name: "Businesses",
      icon: <BackpackIcon width={20} height={20} />,
      path: "/admin/dashboard/businesses",
    },
    {
      name: "Reviews",
      icon: <ChatBubbleIcon width={20} height={20} />,
      path: "/admin/dashboard/reviews",
    },
    {
      name: "Reports",
      icon: <ClipboardIcon width={20} height={20} />,
      path: "/admin/dashboard/reports",
    },
    {
      name: "Settings",
      icon: <GearIcon width={20} height={20} />,
      path: "/admin/dashboard/settings",
    },
  ];

  return (
    <aside className="flex flex-col w-48 h-full px-5 pt-4">
      <section className="flex items-center gap-x-2">
        <span className="bg-slate-950 text-white dark:bg-zinc-100 dark:text-black p-2 rounded-lg">
          <PersonIcon width={25} height={25} />
        </span>
        <div>
          <p className="font-bold">Welcome</p>
          <p className="text-xs text-gray-500 overflow-hidden text-ellipsis max-w-[15ch]">
            {status === "authenticated" && session.user.email}
            {status === "loading" && (
              <LoaderCircleIcon
                width={20}
                height={20}
                className="animate-spin"
              />
            )}
          </p>
        </div>
      </section>
      <Separator className="mt-2" />
      <section className="flex-1 mt-8">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <Link
                href={link.path}
                className={`flex items-center mb-3 py-1 pl-2 w-full ${
                  currentView === link.name.toLowerCase() &&
                  "bg-zinc-50 dark:bg-slate-950 shadow-md py-1 rounded-md"
                }`}
              >
                {link.icon}
                &nbsp;{link.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <Separator className="mb-2" />
      <Button
        onClick={() => signOut()}
        variant={"outline"}
        className="w-full mb-8"
      >
        <ExitIcon className="rotate-180" />
        &nbsp;Log out
      </Button>
    </aside>
  );
}

export default Sidebar;
