import { redirect } from "next/navigation";
import { getSession } from "@/lib/serverSession";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Link from "next/link";
import {
  ChartNoAxesCombinedIcon,
  MessageCircleHeartIcon,
  MessageSquare,
  RocketIcon,
  SearchIcon,
  SquareStackIcon,
  UsersIcon,
} from "lucide-react";

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
          <h3>
            At Revi, find real reviews from real people. Empower businesses to
            grow through genuine feedback and transparency.
          </h3>
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
      <section className="w-full items-center text-center lg:text-left px-4 mt-52 md:px-16 lg:px-32 py-16 bg-block-pattern-light dark:bg-block-pattern-dark">
        <h2 className="text-center font-bold text-lg md:text-xl lg:text-2xl mb-4">
          Why choose Revi
        </h2>
        <p className="text-center mb-2 font-bold">For customers</p>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1 bg-zinc-50 dark:bg-slate-900 py-8 px-4 rounded-md">
            <SearchIcon className="mx-auto mb-4 w-8 h-8" />
            <h3 className="font-bold mb-2 text-center">
              Find Reliable Businesses
            </h3>
            <p className="text-center">
              Browse thousands of reviews from real customers and make informed
              decisions.
            </p>
          </div>
          <div className="flex-1 bg-zinc-50 dark:bg-slate-900 py-8 px-4 rounded-md">
            <SquareStackIcon className="mx-auto mb-4 w-8 h-8" />
            <h3 className="font-bold mb-2 text-center">
              Transparency You Can Trust
            </h3>
            <p className="text-center">
              All reviews are visible, and businesses cannot edit or remove
              negative feedback.
            </p>
          </div>
          <div className="flex-1 bg-zinc-50 dark:bg-slate-900 py-8 px-4 rounded-md">
            <UsersIcon className="mx-auto mb-4 w-8 h-8" />
            <h3 className="font-bold mb-2 text-center">Help Others</h3>
            <p className="text-center">
              Share your experiences and help the community find the best
              services around.
            </p>
          </div>
        </div>
        <p className="text-center mb-2 mt-6 font-bold">For business owners</p>
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex-1 bg-zinc-50 dark:bg-slate-900 py-8 px-4 rounded-md">
            <RocketIcon className="mx-auto mb-4 w-8 h-8" />
            <h3 className="font-bold mb-2 text-center">
              Boost Your Visibility
            </h3>
            <p className="text-center">
              Get listed on Revi and be seen by potential customers who value
              trust and transparency.
            </p>
          </div>
          <div className="flex-1 bg-zinc-50 dark:bg-slate-900 py-8 px-4 rounded-md">
            <ChartNoAxesCombinedIcon className="mx-auto mb-4 w-8 h-8" />
            <h3 className="font-bold mb-2 text-center">Outshine Competitors</h3>
            <p className="text-center">
              Positive reviews can elevate your business and improve your
              ranking above competitors.
            </p>
          </div>
          <div className="flex-1 bg-zinc-50 dark:bg-slate-900 py-8 px-4 rounded-md">
            <MessageCircleHeartIcon className="mx-auto mb-4 w-8 h-8" />
            <h3 className="font-bold mb-2 text-center">Build Trust</h3>
            <p className="text-center">
              Honest feedback from customers helps you build a stronger, more
              credible reputation.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
