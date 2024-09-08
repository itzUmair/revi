"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function DashboardPage() {
  const { data: session, status } = useSession();
  const router = useRouter();

  if (status === "loading") return <p>Loading...</p>;

  if (!session) {
    router.push("/auth/signin");
    return null;
  }

  return (
    <div>
      <h1>Welcome {session.user.email}</h1>
      <p>Your role: {session.user.user_type}</p>
      <button onClick={() => signOut()}>Sign Out</button>
    </div>
  );
}
