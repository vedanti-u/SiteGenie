"use client";
import { Poppins, Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Animate from "@/components/animate";
import { ClerkProvider } from "@clerk/nextjs";

const header = Poppins({
  weight: ["700"],
  subsets: ["latin"],
  variable: "--font-header",
});

const body = Inter({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
  variable: "--font-body",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={twMerge("min-h-screen bg-background", body.className)}>
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
