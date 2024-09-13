import { CopyrightIcon } from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer className="bg-slate-950 mt-16 w-full items-center lg:text-left px-4 md:px-16 lg:px-32 pt-4">
      <div className="flex items-center">
        <Image
          src={"/revi-logo.png"}
          alt="revi logo"
          width={100}
          height={100}
        />
        &nbsp;
        <p className="text-lg font-bold">Revi</p>
      </div>
      <p className="flex items-center justify-center w-full">
        <CopyrightIcon />
        &nbsp;2024 Revi. All rights reserved
      </p>
    </footer>
  );
}

export default Footer;
