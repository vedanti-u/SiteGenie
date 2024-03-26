"use client";
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";
import Animate from "@/components/animate";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body
          className={cn(
            "min-h-screen bg-background font-sans antialiased",
            fontSans.variable
          )}
        >
          <Animate>{children}</Animate>
        </body>
      </html>
    </ClerkProvider>
  );
}
