"use client";
import { Poppins, Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import Animate from "@/components/animate";

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
    <html lang="en" suppressHydrationWarning>
      <body className={twMerge("min-h-screen bg-background", body.className)}>
        <Animate>{children}</Animate>
      </body>
    </html>
  );
}
