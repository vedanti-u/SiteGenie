"use client";
import { ClerkProvider } from "@clerk/nextjs";
import { Roboto } from "next/font/google";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={roboto.className}>
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
