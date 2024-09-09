"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { AdminViewContext } from "@/context/AdminViewContext";
import {
  BackpackIcon,
  ChatBubbleIcon,
  ClipboardIcon,
  ExitIcon,
  GearIcon,
  HomeIcon,
  LightningBoltIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Session } from "next-auth";
import { useContext } from "react";

type Links = {
  name: string;
  icon: any;
};

function Sidebar({ session }: { session: Session }) {
  const { currentView, changeCurrentView } = useContext(AdminViewContext);

  const links: Links[] = [
    { name: "Dashboard", icon: <HomeIcon width={20} height={20} /> },
    { name: "Users", icon: <PersonIcon width={20} height={20} /> },
    { name: "Business", icon: <BackpackIcon width={20} height={20} /> },
    { name: "Reviews", icon: <ChatBubbleIcon width={20} height={20} /> },
    { name: "Reports", icon: <ClipboardIcon width={20} height={20} /> },
    { name: "Admins", icon: <LightningBoltIcon width={20} height={20} /> },
    { name: "Settings", icon: <GearIcon width={20} height={20} /> },
  ];

  return (
    <aside className="flex flex-col max-w-48 h-full px-5 pt-8">
      <section className="flex items-center gap-x-2">
        <span className="bg-slate-950 text-white dark:bg-zinc-100 dark:text-black p-2 rounded-lg">
          <PersonIcon width={25} height={25} />
        </span>
        <div>
          <p className="font-bold">Welcome</p>
          <p className="text-xs text-gray-500 overflow-hidden text-ellipsis max-w-[15ch]">
            {session.user.email}
          </p>
        </div>
      </section>
      <Separator className="mt-2" />
      <section className="flex-1 mt-8">
        <ul>
          {links.map((link, index) => (
            <li key={index}>
              <button
                className={`flex items-center mb-3 py-1 pl-2 w-full ${
                  currentView === link.name.toLowerCase() &&
                  "bg-zinc-50 shadow-md py-1 rounded-md"
                }`}
                onClick={() => changeCurrentView(link.name.toLowerCase())}
              >
                {link.icon}
                &nbsp;{link.name}
              </button>
            </li>
          ))}
        </ul>
      </section>
      <Separator className="mb-2" />
      <Button variant={"outline"} className="w-full mb-8">
        <ExitIcon className="rotate-180" />
        &nbsp;Log out
      </Button>
    </aside>
  );
}

export default Sidebar;
