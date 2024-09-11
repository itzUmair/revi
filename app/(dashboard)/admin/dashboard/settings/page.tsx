import DashboardHeader from "@/components/DashboardHeader";
import ModeToggle from "@/components/ModeToggle";
import Link from "next/link";

async function page() {
  return (
    <section className="">
      <DashboardHeader />
      <div>
        <ModeToggle />
      </div>
    </section>
  );
}

export default page;
