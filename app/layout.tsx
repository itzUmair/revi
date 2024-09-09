import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Providers from "@/context/providers";
import { Toaster } from "@/components/ui/toaster";
import Navbar from "@/components/Navbar";

const roboto = Roboto({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Revi",
  description: "Business review website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={roboto.className}>
        <Providers>
          <Navbar />
          <div className="h-16">{/* this is just a black space */}</div>
          {children}
        </Providers>
        <Toaster />
      </body>
    </html>
  );
}
