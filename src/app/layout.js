"use client";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { DM_Sans } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Animate from "@/components/animate";

const inter = DM_Sans({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={twMerge("min-h-screen bg-background", inter.className)}
        >
          <Animate>{children}</Animate>
        </body>
      </html>
    </ClerkProvider>
  );
}
