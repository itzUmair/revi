"use client";

import { signOut } from "next-auth/react";

function SignoutButton() {
  return <button onClick={() => signOut()}>Sign Out</button>;
}

export default SignoutButton;
