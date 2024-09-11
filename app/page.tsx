import { redirect } from "next/navigation";
import { getSession } from "@/lib/serverSession";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getSession();

  if (session?.user.user_type === 1) {
    redirect("/admin/dashboard");
  }
  if (session?.user.user_type === 2) {
    redirect("/owner/dashboard");
  }

  return (
    <main className="2xl:w-[2460px] mx-auto">
      <Navbar />
      <div className="h-16">{/* this is just a black space */}</div>
      <header className="flex flex-col w-full items-center text-center lg:text-left lg:flex-row justify-between px-4 mt-8 md:px-16 lg:px-32">
        <div className="lg:w-1/2 my-auto">
          <h1 className="font-bold text-xl mb-4 md:text-2xl lg:text-4xl tracking-wider font-helvetica">
            Discover Trusted Businesses, Share Reviews, Build Transparency.
          </h1>
          <h2>
            At Revi, find real reviews from real people. Empower businesses to
            grow through genuine feedback and transparency.
          </h2>
          <div className="flex justify-center lg:justify-start gap-x-2 mt-4">
            <Link
              href={"/search"}
              className="px-2 py-1 lg:px-4 lg:py-2 text-nowrap bg-brand-color text-white hover:bg-brand-color-focus rounded-md transition-colors"
            >
              Explore Businesses
            </Link>
            <Link
              href={"/register"}
              className="px-2 py-1 lg:px-4 lg:py-2 text-nowrap border border-brand-color text-brand-color hover:bg-brand-color hover:text-white rounded-md transition-colors"
            >
              Register Business
            </Link>
          </div>
        </div>
        <div className="lg:w-1/2">
          <Image
            src={"/women-rating.png"}
            alt="business illustration vector art"
            width={600}
            height={600}
            className="mx-auto rounded-lg w-64 h-64 lg:w-auto lg:h-auto"
          />
        </div>
      </header>
    </main>
  );
}
