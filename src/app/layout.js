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
        <head>
          {/* Add your font styles here */}
          <style jsx global>{`
            @font-face {
              font-family: "Poppins";
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url(${header.url}) format("woff2");
            }

            @font-face {
              font-family: "Inter";
              font-style: normal;
              font-weight: 400;
              font-display: swap;
              src: url(${body.url}) format("woff2");
            }

            @font-face {
              font-family: "Inter";
              font-style: normal;
              font-weight: 500;
              font-display: swap;
              src: url(${body.url}) format("woff2");
            }

            @font-face {
              font-family: "Inter";
              font-style: normal;
              font-weight: 700;
              font-display: swap;
              src: url(${body.url}) format("woff2");
            }
          `}</style>
        </head>
        <body className={twMerge("min-h-screen bg-background", body.className)}>
          <Animate>{children}</Animate>
        </body>
      </html>
  );
}
